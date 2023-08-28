const menubtn = document.querySelector('#open-menu-btn')
const closeMenu = document.querySelector('#close-menu-btn')
const menu = document.querySelector('.nav_menu')

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('window-scrolled',window.scrollY>0);
})

// open nav menu
menubtn.addEventListener('click',()=>{
  menu.style.display ='block';
  closeMenu.style.display = 'inline-block';
  menubtn.style.display = 'none'
})

// close nav menu

closeMenu.addEventListener('click',()=>{
  menu.style.display ='none';
  closeMenu.style.display = 'none';
  menubtn.style.display = 'inline-block'
})



ScrollReveal({
  /*reset:true,*/
  distance:'60px',
  duration:2500,
  delay:400
});

ScrollReveal().reveal('.header_profil',{delay:350,origin:'button'});
ScrollReveal().reveal('.header_title',{delay:350,origin:'left'});

/*partenaire*/
ScrollReveal().reveal('.partenaire_container',{delay:350,origin:'top'});

/*services*/
ScrollReveal().reveal('.titr',{delay:350,origin:'top'});
ScrollReveal().reveal('.service1',{delay:300,origin:'top'});
ScrollReveal().reveal('.service2',{delay:550,origin:'top'});
ScrollReveal().reveal('.service3',{delay:700,origin:'top'});

/*projets*/
ScrollReveal().reveal('.title_projet',{delay:350,origin:'top'});
ScrollReveal().reveal('.card_projet',{delay:300,origin:'top'});
ScrollReveal().reveal('.card_projet',{delay:350,origin:'top'});
ScrollReveal().reveal('.card_projet',{delay:350,origin:'top'});
ScrollReveal().reveal('.card_projet',{delay:350,origin:'top'});

/*blog*/
ScrollReveal().reveal('.blog',{delay:300,origin:'top'});
ScrollReveal().reveal('.blog',{delay:350,origin:'top'});
ScrollReveal().reveal('.reference',{delay:500,origin:'top'});

/*profil*/
ScrollReveal().reveal('.img_profil',{delay:300,origin:'left'});
ScrollReveal().reveal('.description',{delay:300,origin:'button'});

/*experience*/
ScrollReveal().reveal('.formation',{delay:300,origin:'left'});
ScrollReveal().reveal('.experience',{delay:300,origin:'button'});

/*temoignage*/
ScrollReveal().reveal('.mySwiper',{delay:350,origin:'top'});

/*footer*/
ScrollReveal().reveal('.contact_container',{delay:350,origin:'top'});

/*A propos */
ScrollReveal().reveal('.name',{delay:350,origin:'button'});
ScrollReveal().reveal('.moi',{delay:350,origin:'left'});
