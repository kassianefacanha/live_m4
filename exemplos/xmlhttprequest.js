if (window.XMLHttpRequest) { // Mozilla, Safari, ...
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
  try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
  } 
  catch (e) {
    try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    } 
    catch (e) {}
  }
}

request = new XMLHttpRequest();

request.addEventListener('load', function(){ 
  console.log(this.responseText) 
});

request.open('GET', 'https://randomuser.me/api/', true);

request.send(null);


fetch('https://randomuser.me/api/')
  .then((result) => {
    if(result.ok){  return result.json()}
  }).then(console.log)