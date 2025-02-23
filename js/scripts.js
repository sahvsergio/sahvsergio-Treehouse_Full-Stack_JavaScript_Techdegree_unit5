//Set initial variables

let peopleUrl = 'https://randomuser.me/api/?results=12';
let searchContainer = document.querySelector('.search-container');
let galleryDiv=document.querySelector('#gallery');

function createSearch(){
    //createe Elements

 
    let searchForm = `<form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                        </form>`;
    searchContainer.insertAdjacentHTML('beforeend',searchForm);
   
  
    
    


    /*

      <form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                        </form>
                        */


}



function fetchEmployees(url){
fetch(url)
.then(response=> response.json())
.then(res=>{
    results=res.results
    for(i=0;i<results.length;i++){
        let employee=results[i];
      
        
        let employeeName=employee.name.first+" "+employee.name.last;
        let employeeEmail=employee.email;
        let  employeeCity=employee.location.city;
        let employeeCountry = employee.location.country;
        let employeeState = employee.location.state;
        let employeePostCode = employee.location.postcode;
        let employeeLocation=employeeCity +", "+ employeeState+", "+ employeePostCode+", " + employeeCountry;
        return employee;
        
}
})


}


fetchEmployees(peopleUrl);
createSearch()


/*
 display 12 users, along with some basic information for each:

    Image
    First and Last Name
    Email
    City or location
    */
/*
function getUsers(url){
    return new Promise((resolve, reject)=>{
         const xhr= new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload= ()=>{

        if(xhr.status===200){
            let data=JSON.parse(xhr.responseText);
            resolve(data);
        }
        else{
            reject(Error(xhr.statusText));
        }
    };
    xhr.onerror=()=>reject(Error('A network occurred'));
    xhr.send();
});
}
getUsers(peopleUrl);*/
