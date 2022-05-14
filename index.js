var tl = gsap.timeline({paused: true});

tl.from(".hero__title", {opacity: 0, y: 30, duration: 0.4}, 0.45)
  .from(".hero__btn", {opacity: 0, y: 30, duration: 0.4}, 0.45)
  .from(".hero__descr", {opacity: 0, duration: 0.5}, "<90%")
  .from(".first-photo", {opacity: 0, scale: 0.9, duration: 0.4}, "<60%")
  .from(".second-photo", {opacity: 0, scale: 0.9, duration: 0.4}, "<60%")
  .from(".third-photo", {opacity: 0, scale: 0.9, duration: 0.4}, "<60%")
  .from(".photos__author", {opacity: 0, duration: 0.7}, "<25%");

tl.play();



var burger = document.querySelector(".burger");
var close = document.querySelector(".close");
var menu = document.querySelector(".menu");
var burgerAnimation = gsap.timeline({paused: true});

burger.addEventListener("click", function() {
    menu.classList.add("menu--open");
    burgerAnimation.play();
});

close.addEventListener("click", function() {
    burgerAnimation.reverse();
});

burgerAnimation.from(".menu__top", {opacity:0, y: "-50%", duration: 0.5}, 0.3)
    .from(".menu__container", {opacity:0, y: 60, duration: 0.6}, "<50%")
    .from(".menu__left", {opacity:0, y: 20, duration: 0.6}, "<75%")
    .from(".menu__right", {opacity:0, y: 40, duration: 0.7}, "<50%")
    .from(".social", {opacity:0, y: 20, duration: 0.7}, "<")
