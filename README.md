<h1 align="center">Car Dealership Inventory Management System</h1>

<p align="center">
  <strong>Full-Stack Car Dealership Inventory Management System</strong>
</p>

<p align="center">
  A web application for managing vehicle inventory, authentication,
  vehicle purchases, stock levels, and administrative operations.
</p>

<p align="center">
  <a href="https://car-dealership-frontend-y1cp.onrender.com">
    Live Demo
  </a>
  &nbsp; • &nbsp;
  <a href="https://car-dealership-inventory-7011.onrender.com/docs">
    API Documentation
  </a>
  &nbsp; • &nbsp;
  <a href="https://drive.google.com/file/d/1mZyn3PgW3sBOEDLGkQAtVN4emWjPtxfE/view?usp=drive_link">
    Demo Video
  </a>
</p>

<hr>

<h2>Project Overview</h2>

<p>
The Car Dealership Inventory Management System is a full-stack web application
designed to manage dealership vehicles and inventory operations.
</p>

<p>
Users can register and log in securely using JWT-based authentication.
Authenticated users can view available vehicles, search inventory, and
purchase vehicles.
</p>

<p>
The system also provides administrative functionality for adding, updating,
deleting, and restocking vehicles.
</p>

<p>
The backend is developed using FastAPI and SQLAlchemy with SQLite as the
persistent database. The frontend is implemented using HTML5, CSS3, and
JavaScript and communicates with the backend through REST APIs.
</p>

<p>
The application is deployed on Render with the frontend and backend running
as separate services.
</p>

<h2>Key Features</h2>

<ul>
  <li>User registration and login</li>
  <li>JWT-based authentication</li>
  <li>Protected REST API endpoints</li>
  <li>Role-based authorization</li>
  <li>Vehicle inventory management</li>
  <li>Add new vehicles</li>
  <li>View available vehicles</li>
  <li>Update vehicle information</li>
  <li>Delete vehicles</li>
  <li>Search vehicles</li>
  <li>Purchase vehicles</li>
  <li>Automatic stock reduction after purchase</li>
  <li>Out-of-stock protection</li>
  <li>Admin-only vehicle restocking</li>
  <li>Frontend and backend API integration</li>
  <li>Automated backend testing using Pytest</li>
  <li>Git and GitHub version control</li>
  <li>Cloud deployment using Render</li>
</ul>

<h2>Technology Stack</h2>

<table>
  <tr>
    <th>Layer</th>
    <th>Technology</th>
  </tr>
  <tr>
    <td>Frontend</td>
    <td>HTML5, CSS3, JavaScript</td>
  </tr>
  <tr>
    <td>Backend</td>
    <td>Python, FastAPI</td>
  </tr>
  <tr>
    <td>Database</td>
    <td>SQLite</td>
  </tr>
  <tr>
    <td>ORM</td>
    <td>SQLAlchemy</td>
  </tr>
  <tr>
    <td>Validation</td>
    <td>Pydantic</td>
  </tr>
  <tr>
    <td>Authentication</td>
    <td>JWT</td>
  </tr>
  <tr>
    <td>Password Security</td>
    <td>Password Hashing</td>
  </tr>
  <tr>
    <td>Testing</td>
    <td>Pytest, FastAPI TestClient</td>
  </tr>
  <tr>
    <td>API Documentation</td>
    <td>Swagger UI</td>
  </tr>
  <tr>
    <td>Deployment</td>
    <td>Render</td>
  </tr>
  <tr>
    <td>Version Control</td>
    <td>Git, GitHub</td>
  </tr>
</table>

<h2>Authentication &amp; Authorization</h2>

<p>
The application uses JWT-based authentication.
</p>

<p>
After successful login, the backend generates an access token. The frontend
uses this token when accessing protected API endpoints.
</p>

<pre>
Authorization: Bearer &lt;access_token&gt;
</pre>

<h3>Regular Users</h3>

<ul>
  <li>Log in</li>
  <li>View vehicles</li>
  <li>View inventory</li>
  <li>Search vehicles</li>
  <li>Purchase available vehicles</li>
</ul>

<h3>Administrators</h3>

<p>
Administrators have additional inventory management permissions including:
</p>

<ul>
  <li>Add vehicles</li>
  <li>Update vehicles</li>
  <li>Delete vehicles</li>
  <li>Restock vehicles</li>
</ul>

<p>
Authorization is enforced by the backend so that restricted operations
cannot be performed simply by modifying the frontend.
</p>

<h2>Inventory Management</h2>

<p>
Each vehicle contains the following information:
</p>

<ul>
  <li>Unique ID</li>
  <li>Make</li>
  <li>Model</li>
  <li>Category</li>
  <li>Price</li>
  <li>Quantity</li>
</ul>

<p>
The system supports the complete inventory lifecycle:
</p>

<ul>
  <li>Adding vehicles</li>
  <li>Viewing vehicles</li>
  <li>Searching vehicles</li>
  <li>Updating vehicles</li>
  <li>Deleting vehicles</li>
  <li>Purchasing vehicles</li>
  <li>Restocking vehicles</li>
</ul>

<p>
After a successful purchase, the vehicle quantity is automatically decreased.
</p>

<p>
Purchases are rejected when the available quantity reaches zero. This prevents
the inventory quantity from becoming negative.
</p>

<p>
Restocking increases the available quantity and is restricted to administrators.
</p>

<h2>Inventory Rules</h2>

<ul>
  <li>Every vehicle has a unique ID.</li>
  <li>Every vehicle contains make, model, category, price, and quantity.</li>
  <li>Vehicle quantity decreases after a successful purchase.</li>
  <li>A vehicle cannot be purchased when its quantity is zero.</li>
  <li>Vehicle stock cannot become negative.</li>
  <li>Restocking increases vehicle quantity.</li>
  <li>Restocking is restricted to administrators.</li>
  <li>Protected vehicle operations require authentication.</li>
  <li>Inventory is refreshed after successful inventory operations.</li>
</ul>

<h2>Database</h2>

<p>
The application uses SQLite as the persistent database.
</p>

<p>
SQLAlchemy is used as the Object Relational Mapping (ORM) layer.
</p>

<h3>Main Database Entities</h3>

<p>
<strong>User</strong><br>
Stores user authentication information and authorization-related data.
</p>

<p>
<strong>Vehicle</strong><br>
Stores vehicle inventory information including ID, make, model, category,
price, and quantity.
</p>

<p>
The database is automatically initialized by the backend application.
</p>

<h2>API Documentation</h2>

<p>
The backend is built using FastAPI and provides interactive API documentation
through Swagger UI.
</p>

<p>
<strong>Live Swagger Documentation:</strong>
<a href="https://car-dealership-inventory-7011.onrender.com/docs">
Open API Documentation
</a>
</p>

<p>
The Swagger interface can be used to view and test the available REST API
endpoints.
</p>

<h2>API Endpoints</h2>

<table>
  <tr>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/auth/register</td>
    <td>Register a new user</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/auth/login</td>
    <td>Login and receive JWT token</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/vehicles</td>
    <td>Add a vehicle</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/vehicles</td>
    <td>View vehicles</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/vehicles/search</td>
    <td>Search vehicles</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/vehicles/{id}</td>
    <td>Update vehicle</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/api/vehicles/{id}</td>
    <td>Delete vehicle</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/vehicles/{id}/purchase</td>
    <td>Purchase vehicle</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/vehicles/{id}/restock</td>
    <td>Restock vehicle</td>
  </tr>
</table>

<h2>Frontend</h2>

<p>
The frontend provides a simple and responsive interface for interacting with
the dealership inventory system.
</p>

<h3>Login</h3>

<p>
Users can enter their email and password to authenticate.
</p>

<h3>Registration</h3>

<p>
New users can create an account through the registration interface.
</p>

<h3>Dashboard</h3>

<p>
After successful login, users can access the vehicle inventory through the
dashboard.
</p>

<h3>Vehicle Management</h3>

<p>
Authorized users can perform inventory operations such as adding, updating,
deleting, purchasing, and restocking vehicles according to their permissions.
</p>

<p>
The frontend communicates with the FastAPI backend using JavaScript
<code>fetch()</code> requests.
</p>

<h2>Project Structure</h2>

<pre>
car-dealership-inventory/
│
├── backend/
│   ├── app/
│   │   ├── auth/
│   │   │   └── jwt.py
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   └── vehicle.py
│   │   ├── routers/
│   │   │   ├── auth.py
│   │   │   └── vehicle.py
│   │   ├── schemas/
│   │   │   ├── auth.py
│   │   │   └── vehicle.py
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── tests/
│   │   ├── test_auth.py
│   │   └── test_vehicles.py
│   │
│   ├── requirements.txt
│   └── car_dealership.db
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .gitignore
├── README.md
└── PROMPTS.md
</pre>

<h2>Local Development</h2>

<h3>Prerequisites</h3>

<ul>
  <li>Python 3.10+</li>
  <li>Git</li>
  <li>A modern web browser</li>
</ul>

<h3>Backend Setup</h3>

<pre>
git clone https://github.com/Jahnavimandapalli/car-dealership-inventory.git

cd car-dealership-inventory

cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
</pre>

<p>
Backend:
</p>

<pre>
http://127.0.0.1:8000
</pre>

<p>
Local Swagger documentation:
</p>

<pre>
http://127.0.0.1:8000/docs
</pre>

<h3>Frontend Setup</h3>

<p>
The frontend consists of:
</p>

<pre>
frontend/
├── index.html
├── script.js
└── style.css
</pre>

<p>
The frontend can be opened using a local web server such as VS Code Live
Server.
</p>

<p>
Example:
</p>

<pre>
http://127.0.0.1:5500
</pre>

<p>
The frontend JavaScript communicates with the FastAPI backend using the
configured API URL.
</p>

<h2>Testing</h2>

<p>
The backend uses Pytest for automated testing.
</p>

<p>
Run the tests using:
</p>

<pre>
pytest
</pre>

<p>
<strong>Verified Test Result: 3 passed</strong>
</p>

<p>
The tests verify important backend functionality including:
</p>

<ul>
  <li>User registration</li>
  <li>User authentication</li>
  <li>Vehicle operations</li>
  <li>Authentication and authorization behaviour</li>
</ul>

<p>
Test report:
</p>

<pre>
backend/test-report.txt
</pre>

<h2>Test-Driven Development</h2>

<p>
Test-Driven Development principles were followed during the development and
debugging of backend functionality.
</p>

<pre>
Write Test
    ↓
Run Test
    ↓
Identify Failure
    ↓
Implement / Modify Code
    ↓
Run Tests Again
    ↓
Refactor
    ↓
Verify
</pre>

<p>
Tests were used to identify issues in authentication and vehicle operations
and to verify that the backend behaved as expected after changes.
</p>

<h2>Git &amp; GitHub</h2>

<p>
Git was used for version control throughout development.
</p>

<p>
<strong>Repository:</strong>
<a href="https://github.com/Jahnavimandapalli/car-dealership-inventory">
GitHub Repository
</a>
</p>

<p>
Common Git workflow:
</p>

<pre>
git status
git add .
git commit -m "Update project"
git push origin main
</pre>

<p>
The completed project was pushed to the GitHub repository.
</p>

<h2>Cloud Deployment</h2>

<p>
The application was deployed using Render with separate frontend and backend
services.
</p>

<h3>Live Frontend</h3>

<p>
<a href="https://car-dealership-frontend-y1cp.onrender.com">
https://car-dealership-frontend-y1cp.onrender.com
</a>
</p>

<h3>Live Backend</h3>

<p>
<a href="https://car-dealership-inventory-7011.onrender.com">
https://car-dealership-inventory-7011.onrender.com
</a>
</p>

<h3>Backend Swagger Documentation</h3>

<p>
<a href="https://car-dealership-inventory-7011.onrender.com/docs">
https://car-dealership-inventory-7011.onrender.com/docs
</a>
</p>

<p>
The deployed frontend communicates with the deployed FastAPI backend through
the configured backend API URL.
</p>

<h3>Backend Deployment Configuration</h3>

<p>
The backend is deployed as a Render web service using FastAPI and Uvicorn.
</p>

<p>
Start command:
</p>

<pre>
uvicorn app.main:app --host 0.0.0.0 --port $PORT
</pre>

<h3>Frontend Deployment</h3>

<p>
The frontend is deployed separately on Render as a static application using
HTML, CSS, and JavaScript.
</p>

<h2>Demo Video</h2>

<p>
A screen recording demonstrating the completed Car Dealership Inventory
Management System is available below.
</p>

<p>
🎥 <strong>
<a href="https://drive.google.com/file/d/1mZyn3PgW3sBOEDLGkQAtVN4emWjPtxfE/view?usp=drive_link">
Watch the Project Demo Video
</a>
</strong>
</p>

<p>
The video demonstrates the application's main functionality, including
authentication, vehicle inventory operations, and the deployed application.
</p>

<h2>Screenshots</h2>

<p>
Screenshots of the completed application can be stored inside the
<code>screenshots/</code> directory.
</p>

<h3>Login Page</h3>

<p>
<img src="screenshots/login.png" alt="Login Page">
</p>

<h3>Vehicle Dashboard</h3>

<p>
<img src="screenshots/dashboard.png" alt="Vehicle Dashboard">
</p>

<h3>Vehicle Management</h3>

<p>
<img src="screenshots/vehicles.png" alt="Vehicle Management">
</p>

<h3>Swagger API Documentation</h3>

<p>
<img src="screenshots/swagger.png" alt="Swagger API Documentation">
</p>

<p>
Replace the screenshot filenames with the actual images added to the
repository.
</p>

<h2>My AI Usage</h2>

<p>
I used <strong>ChatGPT</strong> as a development and learning assistant
during different stages of the project.
</p>

<p>
AI assistance was used for:
</p>

<ul>
  <li>Understanding project requirements</li>
  <li>Planning the application structure</li>
  <li>Understanding FastAPI concepts</li>
  <li>Developing REST API endpoints</li>
  <li>Understanding JWT authentication</li>
  <li>Debugging authentication issues</li>
  <li>Connecting the frontend with the backend</li>
  <li>Developing frontend functionality</li>
  <li>Debugging frontend-backend communication</li>
  <li>Writing and debugging Pytest test cases</li>
  <li>Understanding Git and GitHub commands</li>
  <li>Troubleshooting Render deployment</li>
  <li>Preparing project documentation</li>
</ul>

<p>
AI-generated suggestions were reviewed, modified, and tested during
development.
</p>

<h3>AI Usage Reflection</h3>

<p>
ChatGPT helped reduce development and debugging time by providing explanations,
implementation suggestions, and possible solutions when unfamiliar issues
were encountered.
</p>

<p>
It was particularly useful for understanding FastAPI REST APIs, JWT
authentication, protected endpoints, database integration, automated testing,
Git workflows, and cloud deployment.
</p>

<p>
AI suggestions were not accepted blindly. The generated solutions were
reviewed, modified where necessary, implemented, and tested locally.
Automated tests were also used to verify backend functionality.
</p>

<p>
This experience helped demonstrate how AI can be used responsibly as a
development assistant while maintaining understanding and ownership of the
final implementation.
</p>

<p>
Detailed AI-assisted development prompts are documented in:
</p>

<pre>
PROMPTS.md
</pre>

<h2>Challenges Faced</h2>

<ul>
  <li>Implementing JWT-based authentication</li>
  <li>Protecting API endpoints</li>
  <li>Handling user registration and login</li>
  <li>Connecting the frontend with the FastAPI backend</li>
  <li>Handling authentication tokens in frontend requests</li>
  <li>Implementing vehicle inventory operations</li>
  <li>Managing stock quantities during purchases</li>
  <li>Preventing purchases when stock is zero</li>
  <li>Implementing admin-only operations</li>
  <li>Debugging failing Pytest tests</li>
  <li>Resolving frontend-backend connection issues</li>
  <li>Configuring CORS</li>
  <li>Deploying frontend and backend separately using Render</li>
</ul>

<h2>Future Improvements</h2>

<ul>
  <li>Advanced vehicle search and filtering</li>
  <li>Pagination for large inventories</li>
  <li>Improved admin dashboard</li>
  <li>Vehicle image upload functionality</li>
  <li>Sales history</li>
  <li>User purchase history</li>
  <li>PostgreSQL database for production</li>
  <li>More comprehensive automated tests</li>
  <li>Improved accessibility</li>
  <li>Improved UI animations</li>
  <li>Advanced user role management</li>
  <li>CI/CD integration</li>
</ul>

<hr>

<p align="center">
  <strong>Car Dealership Inventory Management System</strong>
</p>
