# AI Development Prompts

This file documents the AI-assisted development carried out during the
Car Dealership Inventory Management System project.

The prompts below represent the types of prompts used during development,
debugging, testing, frontend integration, GitHub management, deployment,
and documentation.

---

# 1. Project Planning

> I have a TDD Kata problem statement for a Car Dealership Inventory System.
> Help me understand the requirements and divide the project into backend,
> database, authentication, frontend, testing, GitHub, and deployment tasks.

---

# 2. Project Structure

> Help me create a proper project structure for a Car Dealership Inventory
> Management System using FastAPI, SQLite, SQLAlchemy, HTML, CSS, and
> JavaScript.

---

# 3. FastAPI Backend

> Help me build the FastAPI backend for the Car Dealership Inventory System.
> The backend should provide RESTful APIs for authentication, vehicles,
> inventory, purchasing, and restocking.

---

# 4. Database

> Help me configure SQLite with SQLAlchemy for the Car Dealership Inventory
> System. Create the required database models for users and vehicles and
> make sure the database is persistent rather than using an in-memory
> database.

---

# 5. User Model

> Create the FastAPI and SQLAlchemy user model required for registration,
> login, password hashing, and administrator authorization.

---

# 6. Vehicle Model

> Create the SQLAlchemy vehicle model with a unique ID, make, model,
> category, price, and quantity in stock.

---

# 7. Pydantic Schemas

> Create the Pydantic request and response schemas for user authentication
> and vehicle operations in the FastAPI application.

---

# 8. User Registration

> Implement the POST /api/auth/register endpoint using FastAPI and
> SQLAlchemy. Users should register using email and password, passwords
> should be securely hashed, and the user should be stored in the database.

---

# 9. User Login

> Implement the POST /api/auth/login endpoint. Validate the user's email
> and password and return a JWT access token after successful authentication.

---

# 10. JWT Authentication

> Implement JWT authentication for the FastAPI application. Explain how
> to create the token, decode the token, validate it, identify the current
> user, and protect API endpoints.

---

# 11. Protected APIs

> Protect the vehicle APIs using JWT authentication. Unauthenticated users
> should not be able to access protected vehicle operations.

---

# 12. Admin Authorization

> Implement role-based authorization for the Car Dealership Inventory
> System. Normal users and administrators should have different permissions.
> Administrator-only operations should be protected by the backend.

---

# 13. Add Vehicle API

> Implement POST /api/vehicles using FastAPI and SQLAlchemy. The endpoint
> should allow an authenticated user to add a vehicle with make, model,
> category, price, and quantity.

---

# 14. Get Vehicles API

> Implement GET /api/vehicles to return the available vehicles from the
> SQLite database.

---

# 15. Search Vehicles

> Implement GET /api/vehicles/search so that vehicles can be searched by
> make, model, category, and price range.

---

# 16. Update Vehicle

> Implement PUT /api/vehicles/{id} to update vehicle information such as
> make, model, category, price, and quantity.

---

# 17. Delete Vehicle

> Implement DELETE /api/vehicles/{id}. The operation should be restricted
> to administrators and should remove the selected vehicle from inventory.

---

# 18. Purchase Vehicle

> Implement POST /api/vehicles/{id}/purchase. When a vehicle is purchased,
> decrease the quantity by one. Do not allow the quantity to become negative.

---

# 19. Out-of-Stock Protection

> Add validation to the purchase functionality so that a vehicle cannot
> be purchased when its quantity is zero. Return an appropriate error
> response when the vehicle is out of stock.

---

# 20. Restock Vehicle

> Implement POST /api/vehicles/{id}/restock. Restocking should increase
> vehicle quantity and should only be available to administrators.

---

# 21. Inventory Logic

> Review the vehicle inventory logic and make sure that adding, updating,
> purchasing, and restocking vehicles correctly modify the quantity stored
> in the database.

---

# 22. Frontend Login Page

> Create a frontend login page for the Car Dealership Inventory System using
> HTML, CSS, and JavaScript. Make the login interface visually appealing
> with a large font and a clear layout.

---

# 23. Frontend Registration

> Add a registration interface to the frontend so that new users can create
> an account through the FastAPI registration API.

---

# 24. Frontend Dashboard

> Create the frontend dashboard for displaying available dealership
> vehicles after successful login.

---

# 25. Frontend Vehicle Display

> Connect the frontend to GET /api/vehicles and display vehicle information
> including make, model, category, price, and quantity.

---

# 26. Frontend Purchase

> Connect the frontend Purchase button to the vehicle purchase API.
> Disable the Purchase button when the vehicle quantity is zero and refresh
> the inventory after a successful purchase.

---

# 27. Frontend Inventory Operations

> Connect the frontend to the vehicle management APIs so that authorized
> users can perform inventory operations according to their permissions.

---

# 28. Frontend API Integration

> Connect my HTML, CSS, and JavaScript frontend with the FastAPI backend.
> Make sure API requests use the correct backend URL and JWT token for
> protected endpoints.

---

# 29. Login Debugging

> The frontend login page is not working correctly. Help me debug the
> login request, backend response, JWT token handling, and frontend
> redirection.

---

# 30. Backend Connection Debugging

> The deployed frontend displays "Unable to connect to backend" when I
> click Login. Help me identify whether the problem is the API URL, CORS,
> Render deployment, or frontend JavaScript configuration.

---

# 31. CORS Configuration

> Configure FastAPI CORS correctly so that my deployed frontend can
> communicate with my deployed Render backend.

---

# 32. Render Deployment

> Help me deploy the FastAPI backend to Render. Explain the correct
> root directory, build command, start command, and environment
> configuration.

---

# 33. Frontend Deployment

> Help me deploy the HTML, CSS, and JavaScript frontend separately on
> Render and connect it to the deployed FastAPI backend.

---

# 34. API URL Configuration

> My frontend needs to communicate with the deployed backend. Show me
> where the backend API URL should be configured in script.js and how
> to use the Render backend URL.

---

# 35. TDD

> Help me follow the Red-Green-Refactor TDD process for the backend.
> Write tests first for important functionality, implement the required
> code, and then run the tests again to verify the implementation.

---

# 36. Registration Test

> Write a Pytest test using FastAPI TestClient to verify that a new user
> can successfully register through POST /api/auth/register.

---

# 37. Vehicle Test

> Write a Pytest test that registers a unique user, logs in, obtains the
> JWT token, and uses the token to add a vehicle through POST /api/vehicles.

---

# 38. Test Debugging

> My Pytest suite is showing one failed test and two passed tests. Help me
> understand the failure, identify the cause, and modify the test or
> implementation so that the complete test suite passes.

---

# 39. Duplicate Registration Test

> The registration test is returning status code 400 instead of 201 because
> the test email already exists in the SQLite database. Help me modify the
> test to use a unique email so that repeated test runs do not fail because
> of duplicate users.

---

# 40. Test Report Issue

> Pytest is trying to collect test-report.txt as a test file and is giving
> a UnicodeDecodeError. Explain why this is happening and how to prevent
> Pytest from collecting the report file as a test.

---

# 41. Test Verification

> Run the complete backend test suite and verify that all tests pass.
> Report the final number of passed and failed tests.

---

# 42. Git Status

> Help me check my Git repository status and understand which files are
> modified, which files are untracked, and which files need to be added
> before committing.

---

# 43. Git Add and Commit

> Help me add the modified backend and frontend files to Git, create a
> meaningful commit message, and verify that the working tree is clean.

---

# 44. GitHub Push

> Help me push my latest project changes to my GitHub repository and verify
> that the local main branch and origin/main are synchronized.

---

# 45. README Documentation

> Create a professional README.md for my Car Dealership Inventory
> Management System. Include project overview, features, technology stack,
> project structure, API endpoints, authentication, database, testing,
> GitHub, deployment, screenshots, AI usage, and future improvements.

---

# 46. PROMPTS.md Documentation

> Create a PROMPTS.md file documenting the AI-assisted development process
> used for my Car Dealership Inventory Management System. Include prompts
> for project planning, backend development, authentication, vehicle APIs,
> frontend development, testing, debugging, GitHub, deployment, and
> documentation.

---

# 47. AI Usage Documentation

> Help me write an honest My AI Usage section for my README explaining
> how ChatGPT was used during requirement understanding, backend development,
> debugging, frontend integration, testing, GitHub, deployment, and
> documentation.

---

# 48. AI Usage Reflection

> Write an AI Usage Reflection explaining how ChatGPT helped during the
> development process, how generated suggestions were reviewed and tested,
> and how AI was used responsibly as a development assistant rather than
> blindly copying generated code.

---

# 49. Project Verification

> Review the completed Car Dealership Inventory Management System and
> provide a checklist to verify authentication, vehicle APIs, inventory
> operations, frontend integration, testing, GitHub, and deployment.

---

# 50. Final Project Review

> Review my completed Car Dealership Inventory Management System against
> the original TDD Kata requirements. Identify which requirements have been
> implemented and which deliverables still need to be completed.

---

# AI Usage Reflection

ChatGPT was used as an AI-assisted development and learning tool throughout
the project.

AI assistance was used for understanding the project requirements,
planning the application structure, developing FastAPI APIs, working with
SQLAlchemy and SQLite, implementing JWT authentication, debugging
authentication and frontend-backend communication, writing and debugging
Pytest tests, understanding Git and GitHub commands, configuring Render
deployment, and preparing project documentation.

The generated suggestions were reviewed and adapted during development.
The application was run locally, errors were investigated, and the backend
test suite was executed to verify the implementation.

AI was therefore used as a development assistant to improve productivity and
understanding while the resulting implementation was manually reviewed,
tested, and modified according to the project requirements.

---

# Development Verification

The project was developed and verified through multiple stages:

```text
Project Requirements
        ↓
Project Structure
        ↓
Database
        ↓
FastAPI Backend
        ↓
Authentication
        ↓
JWT Authorization
        ↓
Vehicle APIs
        ↓
Inventory Operations
        ↓
Frontend
        ↓
API Integration
        ↓
Testing
        ↓
GitHub
        ↓
Render Deployment
