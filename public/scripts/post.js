import 'regenerator-runtime/runtime'
import { getData } from './cardsBlog';

let url = window.location.search;
const urlParams = new URLSearchParams(url);
const id = urlParams.get('id')
const cards = async () => { await getData() };
console.log(cards)
const titlePage = cards[id];

document.querySelector('.post-header__title').innerHTML = titlePage;
