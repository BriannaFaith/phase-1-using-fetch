fetch("http://api.open-notify.org/astros.json")
.then((response) => {
    return response.json();
})
.then((data) =>{
    console.log(data)
})