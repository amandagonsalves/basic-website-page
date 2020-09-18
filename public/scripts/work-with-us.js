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
   const aboutContentTop = aboutContent.offsetTop;
   const searchTop = search.offsetTop;

   about.addEventListener('click', e => {
       e.preventDefault();
       window.scroll({
        top: aboutContentTop * 3 / 4,
        behavior: "smooth"
       });
   });

   job.addEventListener('click', e => {
        e.preventDefault();
        window.scroll( {
            top: searchTop * 2 / 4,
            behavior: "smooth"

        });
   });
   
   
};

animeScroll();

