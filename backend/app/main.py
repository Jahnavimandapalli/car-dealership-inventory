from fastapi import FastAPI

from app.database import Base, engine
from app.models.user import User
from app.models.vehicle import Vehicle
from app.routers.auth import router as auth_router
from app.routers.vehicle import router as vehicle_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Car Dealership Inventory API"
)

app.include_router(auth_router)
app.include_router(vehicle_router)


@app.get("/")
def root():
    return {
        "message": "Car Dealership Inventory API"
    }