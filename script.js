let openIcon = document.getElementById("open-icon");
let closeIcon = document.getElementById("close-icon");
const heroNav = document.getElementsByTagName("header");
const sideNav = document.querySelector(".side-blur");

openIcon.onclick = function(){
    sideNav.style.display = "block";
    heroNav[0].style.display = "none";
}
closeIcon.onclick = function(){
    sideNav.style.display = "none";
    heroNav[0].style.display = "block";
}