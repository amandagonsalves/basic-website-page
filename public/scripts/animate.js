const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
   const windowTop = window.pageYOffset + (window.innerHeight * 3 / 4);

   target.forEach(item => {

       if(windowTop > item.offsetTop) {
           item.classList.add(animationClass);
       } else {
           item.classList.remove(animationClass);
       }

   });

};

window.addEventListener('scroll', animeScroll)