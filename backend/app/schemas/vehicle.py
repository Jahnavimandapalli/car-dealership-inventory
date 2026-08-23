from pydantic import BaseModel, Field


class VehicleCreate(BaseModel):
    make: str
    model: str
    category: str
    price: float = Field(gt=0)
    quantity: int = Field(ge=0)


class VehicleResponse(BaseModel):
    id: int
    make: str
    model: str
    category: str
    price: float
    quantity: int

    class Config:
        from_attributes = True