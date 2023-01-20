new kursor({
            type: 1,
            removeDefaultCursor: false,
            color: "#de6a08",
        });

hamburger = document.querySelector(".nav-burger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    navBurger = document.querySelector(".nav-burger");
    navBurger.classList.toggle("active");




}