const html = {
    get(element) {
        return document.querySelector(element);
    }
}

const about = html.get('#about');
const job = html.get('#job');
const aboutContent = html.get('#about-content');
const search = html.get('.section__search'); 


function buttonScroll() {
   const aboutContentTop = aboutContent.offsetTop;
   const searchTop = search.offsetTop;
   const aboutButtonTop = aboutContentTop * 3.3 / 4;
   const jobButtonTop = searchTop * 2.3 / 4;

    about.addEventListener('click', e => {
        e.preventDefault();

        scrollToPosition(aboutButtonTop);

   });

   job.addEventListener('click', e => {
        e.preventDefault();

        scrollToPosition(jobButtonTop)

   });
   
};

buttonScroll();

function scrollToPosition(elementTop) {
    window.scroll(0, elementTop);
};

