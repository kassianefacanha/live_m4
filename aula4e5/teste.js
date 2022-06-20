request = new XMLHttpRequest();

request.addEventListener("load", function(){
    console.log(this.responseText)
});

request.open('GET','https://randomuser.me/api/', true)
request.send(null)