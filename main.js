// Menu on scroll

let header = document.querySelector('.header');
window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}
let btnMenu=document.getElementById('btnMenu');
let Navlinks=document.querySelector(".nav-links");
btnMenu.onclick=function(){
    btnMenu.classList.toggle('fa-times');
    Navlinks.classList.toggle('active');

}
//swiper
var swiper = new Swiper(".swip-test-imo", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

