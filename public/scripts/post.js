import { getData } from './cardsBlog';

let url = location.href;
let search_params = url.searchParams;
console.log(url)

if (search_params.has('id')) {
    const id = search_params.get('id');
    const cards = await getData()
    console.log(cards[id].title)
    
} else {
    console.log('no id')
}