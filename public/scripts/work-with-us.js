const html = {
    get(element) {
        return document.querySelector(element);
    }
}

const about = html.get('#about');
const job = html.get('#job');
const aboutContent = html.get('#about-content');
const search = html.get('.section__search'); 


function animeScroll() {
   const windowTop = window.pageYOffset + (window.innerHeight * 3 / 4);
   const aboutTop = about.offsetTop;
   const jobTop = job.offsetTop;
   const aboutContentTop = aboutContent.offsetTop - 3/4;
   const searchfor = search.offsetTop;

   about.addEventListener('click', e => {
       e.preventDefault();
       window.scroll(0, aboutContentTop - 160);
   });
   
   
};

animeScroll();

