let peopleUrl = "https://randomuser.me/api/?results=12";

fetch(peopleUrl)
.then(response=>response.json())
.then(res=>console.log(res.results))


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
