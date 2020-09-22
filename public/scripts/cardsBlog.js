function getData() {
    return fetch('/api/card')
        .then(res => res.json())
        .then(data => data.cards)
        .catch(e => console.log(e));
} 

module.exports = {
    getData
}
