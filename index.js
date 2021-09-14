const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");

openNav.addEventListener("click", function(){
    nav.style.right = "0px";
});

closeNav.addEventListener("click", function(){
    nav.style.right = "-350px";
});