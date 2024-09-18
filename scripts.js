var menu = document.querySelector("#nav-part3")
var menuback = document.querySelector("#menu-back")
var part1 = document.querySelector("#nav-part1")
var flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        menuback.style.top = 0
        part1.style.opacity = 0
        flag = 1
    }
    else{
        menuback.style.top = "-100%"
        part1.style.opacity = 1
        flag = 0
    }
    menu.classList.toggle("active");
});

var laod = document.querySelector("#loader")
setTimeout(function(){
    laod.style.top = "-100%"
},3000);

Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet("#wrk-page1>nav a, #exp-page1>nav a, #cnt-page1>nav a, #abt-page1>nav a, #page1>nav a, #footer-right .mail, #footer-right .insta, #footer-right .linkdin, #footer-right .git, #footer-right .stack", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    freeMode: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
});
var mobswiper = new Swiper(".mobSwiper", {
    effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});