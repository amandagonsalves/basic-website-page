import 'regenerator-runtime/runtime'
import { getData } from './cardsBlog';



async function cardsContent() {

    let url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get('id')

    const cards = await getData();
    console.log(cards)

    const html = {
        get(element) {
            return document.querySelectorAll(element);
        }
    }

    if(id) {
        const titlePage = cards[id].title;
        const paragraphPage = cards[id].textContent;
        const keywordsPage = cards[id].keywords;
        const imagePage = cards[id].thumbnail;
    
    
        html.get('.post-header__title').forEach(element => {
            element.innerHTML = titlePage;
        });
        html.get('.text-container__para').forEach(element => {
            element.innerHTML = paragraphPage;
        });
        html.get('.content-post-page__keywords').forEach(element => {
            element.innerHTML = keywordsPage;
        });
        html.get('.text-container__title').forEach(element => {
            element.innerHTML = titlePage;
        });
        html.get('.content-post-page__image').forEach(element => {
            element.innerHTML = imagePage;
        });
    } else {
        console.log('nao')
    }

     

}
cardsContent()
