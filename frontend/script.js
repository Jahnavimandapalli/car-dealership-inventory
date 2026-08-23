const API_URL = "http://127.0.0.1:8000";


// =========================
// CAR IMAGES
// =========================

const carImages = {

    "Toyota Camry 2027":
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80",

    "Honda Civic 2026":
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",

    "BMW X5 2026":
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",

    "Tesla Model 3 2026":
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80",

    "Ford Mustang 2026":
        "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=900&q=80",

    "Hyundai Creta 2026":
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",

    "Mercedes-Benz C-Class 2026":
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",

    "Toyota Fortuner 2026":
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",

    "Porsche 911 2026":
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
};


// Default image for newly added vehicles

const defaultCarImage =
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80";


// =========================
// SHOW LOGIN
// =========================

function showLogin() {

    document.getElementById("loginSection")
        .classList.remove("hidden");

    document.getElementById("registerSection")
        .classList.add("hidden");

    document.getElementById("dashboardSection")
        .classList.add("hidden");

    document.getElementById("headerLogout")
        .classList.add("hidden");
}


// =========================
// SHOW REGISTER
// =========================

function showRegister() {

    document.getElementById("loginSection")
        .classList.add("hidden");

    document.getElementById("registerSection")
        .classList.remove("hidden");

    document.getElementById("dashboardSection")
        .classList.add("hidden");

    document.getElementById("headerLogout")
        .classList.add("hidden");
}


// =========================
// REGISTER
// =========================

async function register() {

    const email =
        document.getElementById("registerEmail")
            .value.trim();

    const password =
        document.getElementById("registerPassword")
            .value;


    if (!email || !password) {

        document.getElementById("registerMessage")
            .textContent =
            "Please enter email and password.";

        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/api/auth/register`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );


        const data = await response.json();


        if (!response.ok) {

            document.getElementById("registerMessage")
                .textContent =
                data.detail || "Registration failed.";

            return;
        }


        document.getElementById("registerMessage")
            .textContent =
            "Registration successful! Please login.";


        document.getElementById("registerEmail")
            .value = "";

        document.getElementById("registerPassword")
            .value = "";


    } catch (error) {

        console.error(error);

        document.getElementById("registerMessage")
            .textContent =
            "Unable to connect to backend.";
    }
}


// =========================
// LOGIN
// =========================

async function login() {

    const email =
        document.getElementById("loginEmail")
            .value.trim();

    const password =
        document.getElementById("loginPassword")
            .value;


    if (!email || !password) {

        document.getElementById("loginMessage")
            .textContent =
            "Please enter email and password.";

        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/api/auth/login`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );


        const data = await response.json();


        if (!response.ok) {

            document.getElementById("loginMessage")
                .textContent =
                data.detail || "Login failed.";

            return;
        }


        localStorage.setItem(
            "access_token",
            data.access_token
        );


        showDashboard();


    } catch (error) {

        console.error(error);

        document.getElementById("loginMessage")
            .textContent =
            "Unable to connect to backend.";
    }
}


// =========================
// SHOW DASHBOARD
// =========================

function showDashboard() {

    document.getElementById("loginSection")
        .classList.add("hidden");

    document.getElementById("registerSection")
        .classList.add("hidden");

    document.getElementById("dashboardSection")
        .classList.remove("hidden");

    document.getElementById("headerLogout")
        .classList.remove("hidden");


    getVehicles();
}


// =========================
// SHOW ADD VEHICLE FORM
// =========================

function showAddVehicleForm() {

    document.getElementById("addVehicleForm")
        .classList.remove("hidden");

    document.getElementById("vehicleMake")
        .focus();
}


// =========================
// HIDE ADD VEHICLE FORM
// =========================

function hideAddVehicleForm() {

    document.getElementById("addVehicleForm")
        .classList.add("hidden");

    clearVehicleForm();
}


// =========================
// CLEAR VEHICLE FORM
// =========================

function clearVehicleForm() {

    document.getElementById("vehicleMake").value = "";

    document.getElementById("vehicleModel").value = "";

    document.getElementById("vehicleCategory").value = "";

    document.getElementById("vehiclePrice").value = "";

    document.getElementById("vehicleQuantity").value = "";

    document.getElementById("addVehicleMessage")
        .textContent = "";
}


// =========================
// ADD VEHICLE
// =========================

async function addVehicle() {

    const token =
        localStorage.getItem("access_token");


    if (!token) {

        showLogin();

        return;
    }


    const make =
        document.getElementById("vehicleMake")
            .value.trim();

    const model =
        document.getElementById("vehicleModel")
            .value.trim();

    const category =
        document.getElementById("vehicleCategory")
            .value;

    const price =
        Number(
            document.getElementById("vehiclePrice")
                .value
        );

    const quantity =
        Number(
            document.getElementById("vehicleQuantity")
                .value
        );


    if (!make || !model || !category) {

        document.getElementById("addVehicleMessage")
            .textContent =
            "Please fill in all vehicle details.";

        return;
    }


    if (price <= 0) {

        document.getElementById("addVehicleMessage")
            .textContent =
            "Price must be greater than 0.";

        return;
    }


    if (quantity < 0) {

        document.getElementById("addVehicleMessage")
            .textContent =
            "Quantity cannot be negative.";

        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/api/vehicles`,
            {
                method: "POST",

                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    make: make,
                    model: model,
                    category: category,
                    price: price,
                    quantity: quantity
                })
            }
        );


        const data =
            await response.json();


        if (response.status === 401) {

            logout();

            return;
        }


        if (response.status === 403) {

            document.getElementById("addVehicleMessage")
                .textContent =
                data.detail ||
                "Admin access required.";

            return;
        }


        if (!response.ok) {

            document.getElementById("addVehicleMessage")
                .textContent =
                data.detail ||
                "Unable to add vehicle.";

            return;
        }


        document.getElementById("addVehicleMessage")
            .textContent =
            "Vehicle added successfully!";


        clearVehicleForm();


        setTimeout(() => {

            hideAddVehicleForm();

            getVehicles();

        }, 700);


    } catch (error) {

        console.error(error);

        document.getElementById("addVehicleMessage")
            .textContent =
            "Unable to connect to backend.";
    }
}


// =========================
// GET VEHICLES
// =========================

async function getVehicles() {

    const token =
        localStorage.getItem("access_token");


    if (!token) {

        showLogin();

        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/api/vehicles`,
            {
                method: "GET",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        if (response.status === 401) {

            logout();

            return;
        }


        const vehicles =
            await response.json();


        if (!response.ok) {

            document.getElementById("vehicleList")
                .innerHTML = `
                    <div class="error-message">
                        ${vehicles.detail ||
                        "Unable to load vehicles."}
                    </div>
                `;

            return;
        }


        displayVehicles(vehicles);


    } catch (error) {

        console.error(error);

        document.getElementById("vehicleList")
            .innerHTML = `
                <div class="error-message">
                    <strong>
                        Unable to load vehicles.
                    </strong>

                    <p>
                        Please make sure the FastAPI
                        backend is running.
                    </p>
                </div>
            `;
    }
}


// =========================
// DISPLAY VEHICLES
// =========================

function displayVehicles(vehicles) {

    const vehicleList =
        document.getElementById("vehicleList");


    vehicleList.innerHTML = "";


    if (!vehicles || vehicles.length === 0) {

        vehicleList.innerHTML = `
            <div class="empty-state">

                <div>🚗</div>

                <h3>No Vehicles Available</h3>

                <p>
                    Add your first vehicle to the inventory.
                </p>

            </div>
        `;

        return;
    }


    vehicles.forEach(vehicle => {

        const card =
            document.createElement("div");


        card.className = "vehicle-card";


        const carName =
            `${vehicle.make} ${vehicle.model}`;


        const image =
            carImages[carName] ||
            defaultCarImage;


        let stockText = "In Stock";
        let stockClass = "in-stock";


        if (vehicle.quantity === 0) {

            stockText = "Out of Stock";
            stockClass = "out-stock";

        } else if (vehicle.quantity <= 3) {

            stockText = "Low Stock";
            stockClass = "low-stock";
        }


        card.innerHTML = `

            <div class="vehicle-image-container">

                <img
                    src="${image}"
                    alt="${carName}"
                    class="vehicle-image"
                    onerror="this.src='${defaultCarImage}'"
                >

            </div>


            <div class="vehicle-content">

                <div class="vehicle-title-row">

                    <h3>
                        ${carName}
                    </h3>

                    <span
                        class="stock-badge ${stockClass}">
                        ${stockText}
                    </span>

                </div>


                <p class="category">
                    ${vehicle.category}
                </p>


                <p class="price">
                    $${Number(vehicle.price)
                        .toLocaleString()}
                </p>


                <p class="quantity">
                    📦 ${vehicle.quantity}
                    units available
                </p>


                <div class="vehicle-actions">

                    <button
                        class="purchase-btn"
                        onclick="purchaseVehicle(${vehicle.id})">
                        🛒 Purchase
                    </button>

                    <button
                        class="restock-btn"
                        onclick="restockVehicle(${vehicle.id})">
                        📦 Restock
                    </button>

                </div>


                <div class="vehicle-actions">

                    <button
                        class="edit-btn"
                        onclick="editVehicle(${vehicle.id})">
                        ✏️ Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteVehicle(${vehicle.id})">
                        🗑 Delete
                    </button>

                </div>

            </div>
        `;


        vehicleList.appendChild(card);
    });
}


// =========================
// PURCHASE VEHICLE
// =========================

async function purchaseVehicle(vehicleId) {

    const token =
        localStorage.getItem("access_token");


    if (!token) {

        showLogin();

        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/api/vehicles/${vehicleId}/purchase`,
            {
                method: "POST",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        const data =
            await response.json();


        if (response.status === 401) {

            logout();

            return;
        }


        if (!response.ok) {

            alert(
                data.detail ||
                "Purchase failed."
            );

            return;
        }


        alert(
            "Vehicle purchased successfully!"
        );


        getVehicles();


    } catch (error) {

        console.error(error);

        alert(
            "Unable to connect to backend."
        );
    }
}


// =========================
// RESTOCK VEHICLE
// =========================

async function restockVehicle(vehicleId) {

    const quantity =
        prompt("Enter restock quantity:");


    if (!quantity ||
        Number(quantity) <= 0) {

        return;
    }


    const token =
        localStorage.getItem("access_token");


    if (!token) {

        showLogin();

        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/api/vehicles/${vehicleId}/restock?quantity=${quantity}`,
            {
                method: "POST",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        const data =
            await response.json();


        if (response.status === 401) {

            logout();

            return;
        }


        if (!response.ok) {

            alert(
                data.detail ||
                "Restock failed."
            );

            return;
        }


        alert(
            "Vehicle restocked successfully!"
        );


        getVehicles();


    } catch (error) {

        console.error(error);

        alert(
            "Unable to connect to backend."
        );
    }
}


// =========================
// DELETE VEHICLE
// =========================

async function deleteVehicle(vehicleId) {

    if (!confirm(
        "Are you sure you want to delete this vehicle?"
    )) {

        return;
    }


    const token =
        localStorage.getItem("access_token");


    if (!token) {

        showLogin();

        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/api/vehicles/${vehicleId}`,
            {
                method: "DELETE",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        const data =
            await response.json();


        if (response.status === 401) {

            logout();

            return;
        }


        if (!response.ok) {

            alert(
                data.detail ||
                "Delete failed."
            );

            return;
        }


        alert(
            "Vehicle deleted successfully!"
        );


        getVehicles();


    } catch (error) {

        console.error(error);

        alert(
            "Unable to connect to backend."
        );
    }
}


// =========================
// EDIT VEHICLE
// =========================

async function editVehicle(vehicleId) {

    const token =
        localStorage.getItem("access_token");


    if (!token) {

        showLogin();

        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/api/vehicles/${vehicleId}`,
            {
                method: "GET",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        const vehicle =
            await response.json();


        if (response.status === 401) {

            logout();

            return;
        }


        if (!response.ok) {

            alert(
                vehicle.detail ||
                "Unable to get vehicle."
            );

            return;
        }


        const make =
            prompt(
                "Make:",
                vehicle.make
            );

        if (make === null) return;


        const model =
            prompt(
                "Model:",
                vehicle.model
            );

        if (model === null) return;


        const category =
            prompt(
                "Category:",
                vehicle.category
            );

        if (category === null) return;


        const price =
            prompt(
                "Price:",
                vehicle.price
            );

        if (price === null) return;


        const quantity =
            prompt(
                "Quantity:",
                vehicle.quantity
            );

        if (quantity === null) return;


        const updateResponse =
            await fetch(
                `${API_URL}/api/vehicles/${vehicleId}`,
                {
                    method: "PUT",

                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        make: make,

                        model: model,

                        category: category,

                        price: Number(price),

                        quantity: Number(quantity)

                    })
                }
            );


        const data =
            await updateResponse.json();


        if (updateResponse.status === 401) {

            logout();

            return;
        }


        if (!updateResponse.ok) {

            alert(
                data.detail ||
                "Update failed."
            );

            return;
        }


        alert(
            "Vehicle updated successfully!"
        );


        getVehicles();


    } catch (error) {

        console.error(error);

        alert(
            "Unable to connect to backend."
        );
    }
}


// =========================
// LOGOUT
// =========================

function logout() {

    localStorage.removeItem("access_token");

    showLogin();

    document.getElementById("loginMessage")
        .textContent =
        "Logged out successfully.";
}


// =========================
// PAGE LOAD
// =========================

// IMPORTANT:
// Always show login when the frontend is opened.
// Do NOT automatically open the dashboard.

window.onload = function () {

    showLogin();

};