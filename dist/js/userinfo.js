let user = sessionStorage.getItem("name");
let points = sessionStorage.getItem("point");




document.querySelector(".names").innerHTML = user;
document.querySelector(".points").innerHTML = points;