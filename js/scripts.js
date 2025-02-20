function getUsers(url){

    const xhr= new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload= ()=>{

        if(xhr.status===200){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
        }
    };
    xhr.send();
    
    
}
