import 'regenerator-runtime/runtime'
import { getData } from './cardsBlog';

let url = window.location.search;
const urlParams = new URLSearchParams(url);
const id = urlParams.get('id')

async function cardsContent() {
    return await getData(); 
}

const cards = cardsContent();

console.log(cards)

console.log(cards[id])
/* 
const titlePage = cards[id];

document.querySelector('.post-header__title').innerHTML = `${titlePage} oi`; */
