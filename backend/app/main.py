from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models.user import User
from app.models.vehicle import Vehicle
from app.routers.auth import router as auth_router
from app.routers.vehicle import router as vehicle_router


# Create database tables
Base.metadata.create_all(bind=engine)


# Create FastAPI application
app = FastAPI(
    title="Car Dealership Inventory API"
)


# =========================
# CORS CONFIGURATION
# =========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================
# ROUTERS
# =========================
app.include_router(auth_router)
app.include_router(vehicle_router)


# =========================
# ROOT
# =========================
@app.get("/")
def root():
    return {
        "message": "Car Dealership Inventory API"
    }