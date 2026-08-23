from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.auth.jwt import get_current_user_id, get_current_admin
from app.database import get_db
from app.models.vehicle import Vehicle
from app.schemas.vehicle import VehicleCreate, VehicleResponse


router = APIRouter(
    prefix="/api/vehicles",
    tags=["Vehicles"]
)


# =========================
# CREATE VEHICLE - ADMIN ONLY
# =========================
@router.post(
    "",
    response_model=VehicleResponse,
    status_code=status.HTTP_201_CREATED
)
def create_vehicle(
    vehicle_data: VehicleCreate,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin)
):
    vehicle = Vehicle(
        make=vehicle_data.make,
        model=vehicle_data.model,
        category=vehicle_data.category,
        price=vehicle_data.price,
        quantity=vehicle_data.quantity
    )

    db.add(vehicle)
    db.commit()
    db.refresh(vehicle)

    return vehicle


# =========================
# SEARCH VEHICLES
# =========================
@router.get(
    "/search",
    response_model=list[VehicleResponse]
)
def search_vehicles(
    make: Optional[str] = None,
    model: Optional[str] = None,
    category: Optional[str] = None,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    db: Session = Depends(get_db),
    current_user_id: int = Depends(get_current_user_id)
):
    query = db.query(Vehicle)

    if make:
        query = query.filter(Vehicle.make.ilike(f"%{make}%"))

    if model:
        query = query.filter(Vehicle.model.ilike(f"%{model}%"))

    if category:
        query = query.filter(Vehicle.category.ilike(f"%{category}%"))

    if min_price is not None:
        query = query.filter(Vehicle.price >= min_price)

    if max_price is not None:
        query = query.filter(Vehicle.price <= max_price)

    return query.all()


# =========================
# READ ALL VEHICLES
# =========================
@router.get(
    "",
    response_model=list[VehicleResponse]
)
def get_vehicles(
    db: Session = Depends(get_db),
    current_user_id: int = Depends(get_current_user_id)
):
    return db.query(Vehicle).all()


# =========================
# READ ONE VEHICLE
# =========================
@router.get(
    "/{vehicle_id}",
    response_model=VehicleResponse
)
def get_vehicle(
    vehicle_id: int,
    db: Session = Depends(get_db),
    current_user_id: int = Depends(get_current_user_id)
):
    vehicle = db.query(Vehicle).filter(
        Vehicle.id == vehicle_id
    ).first()

    if vehicle is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Vehicle not found"
        )

    return vehicle


# =========================
# UPDATE VEHICLE - ADMIN ONLY
# =========================
@router.put(
    "/{vehicle_id}",
    response_model=VehicleResponse
)
def update_vehicle(
    vehicle_id: int,
    vehicle_data: VehicleCreate,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin)
):
    vehicle = db.query(Vehicle).filter(
        Vehicle.id == vehicle_id
    ).first()

    if vehicle is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Vehicle not found"
        )

    vehicle.make = vehicle_data.make
    vehicle.model = vehicle_data.model
    vehicle.category = vehicle_data.category
    vehicle.price = vehicle_data.price
    vehicle.quantity = vehicle_data.quantity

    db.commit()
    db.refresh(vehicle)

    return vehicle


# =========================
# DELETE VEHICLE - ADMIN ONLY
# =========================
@router.delete(
    "/{vehicle_id}"
)
def delete_vehicle(
    vehicle_id: int,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin)
):
    vehicle = db.query(Vehicle).filter(
        Vehicle.id == vehicle_id
    ).first()

    if vehicle is None:
        raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Vehicle not found"
        )

    db.delete(vehicle)
    db.commit()

    return {
        "message": "Vehicle deleted successfully"
    }


# =========================
# PURCHASE VEHICLE
# =========================
@router.post(
    "/{vehicle_id}/purchase",
    response_model=VehicleResponse
)
def purchase_vehicle(
    vehicle_id: int,
    db: Session = Depends(get_db),
    current_user_id: int = Depends(get_current_user_id)
):
    vehicle = db.query(Vehicle).filter(
        Vehicle.id == vehicle_id
    ).first()

    if vehicle is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Vehicle not found"
        )

    if vehicle.quantity <= 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Vehicle is out of stock"
        )

    vehicle.quantity -= 1

    db.commit()
    db.refresh(vehicle)

    return vehicle


# =========================
# RESTOCK VEHICLE - ADMIN ONLY
# =========================
@router.post(
    "/{vehicle_id}/restock",
    response_model=VehicleResponse
)
def restock_vehicle(
    vehicle_id: int,
    quantity: int,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin)
):
    if quantity <= 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Restock quantity must be greater than 0"
        )

    vehicle = db.query(Vehicle).filter(
        Vehicle.id == vehicle_id
    ).first()

    if vehicle is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Vehicle not found"
        )

    vehicle.quantity += quantity

    db.commit()
    db.refresh(vehicle)

    return vehicle