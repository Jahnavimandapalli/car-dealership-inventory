from sqlalchemy.orm import Session
from pwdlib import PasswordHash

from app.models.user import User

password_hash = PasswordHash.recommended()


def register_user(db: Session, email: str, password: str):
    existing_user = db.query(User).filter(User.email == email).first()

    if existing_user:
        return None

    hashed_password = password_hash.hash(password)

    user = User(
        email=email,
        password_hash=hashed_password
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user