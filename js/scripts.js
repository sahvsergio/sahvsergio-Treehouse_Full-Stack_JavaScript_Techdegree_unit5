//Set initial variables

let peopleUrl = "https://randomuser.me/api/?results=12&nat=AU,CA,GB,IE,NZ,US";

let searchContainer = document.querySelector('.search-container');
let galleryDiv=document.querySelector('#gallery');

// =================

//fetch requests

//================
 async function fetchEmployees(url) {
    try{
  let apiRequest= await fetch(url).
  then((response) => response.json())
    .then((res) => {
      results = res.results;
      return results;
    })
    .then(results => displayEmployees(results))
    .then((employees)=> createModal(employees));
    
}
catch{error=>console.error(error)}
finally{
    createSearch()

}
    
    
    
}


// =================
// Helper Functions

function createSearch(){
    let searchForm = `<form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                        </form>`;
    searchContainer.insertAdjacentHTML('beforeend',searchForm);

}

//=======================================================



function displayEmployees(employees){
    console.log(employees);
    for(i=0; i<employees.length;i++){
        let employee=employees[i];
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

        galleryDiv.insertAdjacentHTML('beforeend',employeeMarkup);
}
}





function createModal(employees){
    galleryDiv.addEventListener('click',(e)=>{
    let employeeCard=e.target.closest('.card');
    console.log(employeeCard);
    let employeeCardName=employeeCard.querySelector('h3').innerText;
    let employeeParagraphs=employeeCard.getElementsByTagName('p')
    let employeeCardEmail=employeeParagraphs[0].innerText;
    let employeeLocation=employeeParagraphs[1].innerText.split(',');
    let emp
    let employeeCity=employeeLocation[0];
    
    console.log({employeeLocation})
    let ModalMarkup = `<div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${employeeCardName}</h3>
                        <p class="modal-text">${employeeCardEmail}</p>
                        <p class="modal-text cap">${employeeCity}</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>`;
    galleryDiv.insertAdjacentHTML('afterend',ModalMarkup);

   
    
});


};




    //=============================================================
    /* 


    let employeeName=employee.name.first+" "+employee.name.last;
        let employeeEmail=employee.email;
        let  employeeCity=employee.location.city;
        let employeeCountry = employee.location.country;
        let employeeState = employee.location.state;
        let employeePostCode = employee.location.postcode;
        let employeeLocation=employeeCity +", "+ employeeState+", "+ employeePostCode+", " + employeeCountry;
    //for (i = 0; i < results.length; i++) {
     // let employee = results[i];
*/



fetchEmployees(peopleUrl);

 
