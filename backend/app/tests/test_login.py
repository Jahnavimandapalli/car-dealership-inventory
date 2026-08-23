from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_user_can_login():
    email = "loginuser@example.com"
    password = "Password123!"

    # Create the user first
    register_response = client.post(
        "/api/auth/register",
        json={
            "email": email,
            "password": password
        }
    )

    # Login
    response = client.post(
        "/api/auth/login",
        json={
            "email": email,
            "password": password
        }
    )

    assert response.status_code == 200
    data = response.json()

    assert "access_token" in data
    assert data["token_type"] == "bearer"