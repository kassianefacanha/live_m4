import fetch from 'node-fetch';

// const fetch = require('node-fetch');
function Gereusuarios(numerosUser){
    fetch('https://randomuser.me/api/?results='+ numerosUser)
    .then((result) => {
      if(result.ok){  return result.json()}
    }).then((data) => {
        console.log(data)
    })
}
Gereusuarios(5);
