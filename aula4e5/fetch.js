import fetch from 'node-fetch';

fetch('https://randomuser.me/api/')
.then((response) =>{ 
    if(response.ok) return response.json()
}).then((data)=>{
    console.log(data)
})