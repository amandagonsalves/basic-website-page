import 'regenerator-runtime/runtime'
import { getData } from './cardsBlog';



async function cardsContent() {

    let url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get('id')

    const cards = await getData();

    console.log(cards)
    console.log(cards[id])

    const titlePage = cards[id].title;

    document.querySelector('.post-header__title').innerHTML = `${titlePage} oi`;

}
cardsContent()
