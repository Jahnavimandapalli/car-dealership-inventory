from fastapi.testclient import TestClient
from app.main import app
import uuid

client = TestClient(app)


def test_user_can_add_vehicle():
    # Create a unique user for this test
    email = f"vehicle_{uuid.uuid4()}@example.com"
    password = "Password123!"

    register_response = client.post(
        "/api/auth/register",
        json={
            "email": email,
            "password": password
        }
    )

    assert register_response.status_code == 201

    # Login
    login_response = client.post(
        "/api/auth/login",
        json={
            "email": email,
            "password": password
        }
    )

    assert login_response.status_code == 200

    token = login_response.json()["access_token"]

    # Add vehicle
    response = client.post(
        "/api/vehicles",
        headers={
            "Authorization": f"Bearer {token}"
        },
        json={
            "make": "Toyota",
            "model": "Camry",
            "category": "Sedan",
            "price": 25000,
            "quantity": 5
        }
    )

    assert response.status_code == 201

    data = response.json()

    assert data["make"] == "Toyota"
    assert data["model"] == "Camry"
    assert data["category"] == "Sedan"
    assert data["price"] == 25000
    assert data["quantity"] == 5