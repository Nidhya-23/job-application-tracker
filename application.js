if(localStorage.getItem("loggedIn")!="true"){

window.location.href="login.html";

}
let applications = JSON.parse(localStorage.getItem("applications")) || [];

let editIndex = -1;

displayApplications();

function addApplication() {
  let company = document.getElementById("company").value.trim();

  let role = document.getElementById("role").value.trim();

  let location = document.getElementById("location").value.trim();

  let status = document.getElementById("status").value;

  if (company === "" || role === "" || location === "") {
    alert("Please fill all fields");
    return;
  }

  let application = {
    company: company,

    role: role,

    location: location,

    status: status,

    date: new Date().toISOString(),
  };

  if (editIndex === -1) {
    applications.push(application);
  } else {
    applications[editIndex] = application;

    editIndex = -1;

    document.getElementById("addBtn").innerText = "Add Application";
  }

  localStorage.setItem("applications", JSON.stringify(applications));

  document.getElementById("company").value = "";
  document.getElementById("role").value = "";
  document.getElementById("location").value = "";
  document.getElementById("status").selectedIndex = 0;

  displayApplications();
}

function displayApplications() {
  let container = document.getElementById("applications-list");

  container.innerHTML = "";

  document.getElementById("count").innerText =
    applications.length + " Applications";

  applications.forEach((app, index) => {
    let statusClass = app.status.toLowerCase();

    container.innerHTML += `

        <div class="card" data-status="${app.status}">

            <div class="card-top">

                <h3>${app.company}</h3>

                <span class="status ${statusClass}">
                    ${app.status}
                </span>

            </div>

            <p><strong>Role:</strong> ${app.role}</p>

            <p><strong>Location:</strong> ${app.location}</p>

            <button
            class="edit-btn"
            onclick="editApplication(${index})">
            Edit
            </button>

            <button
            class="delete-btn"
            onclick="deleteApplication(${index})">
            Delete
            </button>

        </div>
        `;
  });
}

function deleteApplication(index) {
  applications.splice(index, 1);

  localStorage.setItem("applications", JSON.stringify(applications));

  displayApplications();
}

function editApplication(index) {
  let app = applications[index];

  document.getElementById("company").value = app.company;

  document.getElementById("role").value = app.role;

  document.getElementById("location").value = app.location;

  document.getElementById("status").value = app.status;

  editIndex = index;

  document.getElementById("addBtn").innerText = "Update Application";
}

function searchApplications() {
  let searchText = document.getElementById("search").value.toLowerCase();

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let company = card.querySelector("h3").innerText.toLowerCase();

    if (company.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function filterApplications() {
  let selectedStatus = document.getElementById("filter").value;

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let cardStatus = card.getAttribute("data-status");

    if (selectedStatus === "All" || cardStatus === selectedStatus) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
function logout(){


localStorage.removeItem("loggedIn");


alert("Logged out");


window.location.href="login.html";

}
