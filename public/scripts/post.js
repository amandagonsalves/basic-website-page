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
            return document.querySelector(element);
        }
    }

    if(id) {
        const titlePage = cards[id].title;
        const paragraphPage = cards[id].textContent;
        const keywordsPage = cards[id].keywords;
        const imagePage = cards[id].thumbnail;
    
    
        html.get('.post-header__title').innerHTML = titlePage;
        html.get('.text-container__para').innerHTML = paragraphPage;
        html.get('.content-post-page__keywords').innerHTML = keywordsPage;
        html.get('.text-container__title').innerHTML = titlePage;
        html.get('.content-post-page__image').innerHTML = imagePage;
    } else {
        console.log('nao')
    }

     

}
cardsContent()
