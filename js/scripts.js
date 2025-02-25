//Set initial variables

let peopleUrl = "https://randomuser.me/api/?results=12&nat=AU,CA,GB,IE,NZ,US";

let searchContainer = document.querySelector(".search-container");
let galleryDiv = document.querySelector("#gallery");

// =================

//fetch requests

//================
async function fetchEmployees(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    let employees = data.results;
    displayEmployees(employees);
    createModal(employees);
  } catch (error) {
    console.error(error);
  } finally {
    createSearch();
    closeModal();
    searchEmployee();
  }
}

// =================
// Helper Functions

function createSearch() {
  let searchForm = `<form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                        </form>`;
  searchContainer.insertAdjacentHTML("beforeend", searchForm);
}

//=======================================================

function displayEmployees(employees) {

  for (i = 0; i < employees.length; i++) {
    let employee = employees[i];
    let employeeMarkup = `<div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${employee.picture.medium}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
                        <p class="card-text">${employee.email}</p>
                        <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
                    </div>
                </div>`;

    galleryDiv.insertAdjacentHTML("beforeend", employeeMarkup);
  }
}

function createModal(employees) {
  galleryDiv.addEventListener("click", (e) => {
    let employeeCard = e.target.closest(".card");
    if (!employeeCard) return; //

    let employeeCardName = employeeCard.querySelector("h3").innerText;

    let emp;

    const matchedEmployee = employees.find(
      (emp) => `${emp.name.first} ${emp.name.last}` === employeeCardName
    );
    let dob = matchedEmployee.dob.date.split("T");
    let dateOfBirth = dob[0].split("-");

    let ModalMarkup = `<div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${matchedEmployee.picture.medium}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${matchedEmployee.name.first} ${matchedEmployee.name.last}</h3>
                        <p class="modal-text">${matchedEmployee.email}</p>
                        <p class="modal-text cap">${matchedEmployee.location.city}</p>
                        <hr>
                        <p class="modal-text">${matchedEmployee.cell}</p>
                        <p class="modal-text">${matchedEmployee.location.street.number} ${matchedEmployee.location.street.name}, ${matchedEmployee.location.city}, ${matchedEmployee.location.state} 97204</p>
                        <p class="modal-text">Birthday:${dateOfBirth[1]}/${dateOfBirth[2]}/${dateOfBirth[0]}</p>
                    </div>
                </div>`;
    galleryDiv.insertAdjacentHTML("afterend", ModalMarkup);
  });
}

fetchEmployees(peopleUrl);

function closeModal() {
  document.addEventListener("click", (e) => {
    const modalContainer = document.querySelector(".modal-container");

    // Close if clicking on the close button or outside the modal
    if (e.target.closest("#modal-close-btn") || e.target === modalContainer) {
      modalContainer.remove();
    }
  });
}

function searchEmployee() {
  let searchInput = document.querySelector("#search-input");
  searchInput.addEventListener("keyup", (e) => {
    let currentValue = e.target.value.toLowerCase();
  
    let employees = document.querySelectorAll("h3.card-name");
    employees.forEach((employee) => {
      if (employee.textContent.toLowerCase().includes(currentValue)) {
        employee.parentNode.parentNode.style.display = "block";
      } else {
        employee.parentNode.parentNode.style.display = "none";
      }
    });
  });
}
