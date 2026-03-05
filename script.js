const hamMenu = document.querySelector('.bx-menu-right');
console.log(hamMenu);

const closeMenu = document.querySelector('.bx-x');

const navMenu = document.querySelector('.nav-menu-cta');


function just(){
    hamMenu.classList.toggle('active');
     closeMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
}

