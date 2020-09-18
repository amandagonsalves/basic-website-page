const html = {
    get(element) {
        return document.querySelector(element);
    }
}

const about = html.get('#about');
const job = html.get('#job');
const aboutContent = html.get('#about-content');
const search = html.get('.section__search'); 

const aboutContentTop = aboutContent.offsetTop;
const searchTop = search.offsetTop;
const aboutButtonTop = aboutContentTop * 3.3 / 4;
const jobButtonTop = searchTop * 2.3 / 4;


function buttonScroll() {

   addEventToButton(about, aboutButtonTop);

   addEventToButton(job, jobButtonTop);
   
};

buttonScroll();

function addEventToButton(button, elementTop) {
    button.addEventListener('click', e => {
        e.preventDefault();

        scrollToPosition(elementTop);
   });
}

function scrollToPosition(elementTop) {
    smoothScrollTo(0, elementTop);
};

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 700;

    const easeInOutQuart = (time, from, distance, duration) => {
        if((time /= duration / 2) < 1) return distance / 2 * time**3 + from;
        return -distance / 2 * ((time -= 2) * time**3 - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        
        if(time >= duration) {
            clearInterval(timer);
        };

        window.scroll(newX, newY);

    }, 1000 / 60);
}

