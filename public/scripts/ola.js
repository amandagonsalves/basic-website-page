

console.log('ola')
document.querySelector('.post-header__title').innerHTML = 'oi'
var url = new URL('http://localhost:5500/post-blog.html?id=1');
var search_params = url.searchParams;

// true
if (search_params.has('id')) {
    // "100"
    console.log(search_params.get('id'))
}