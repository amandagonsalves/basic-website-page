function getData() {
    return fetch('/api/card/:id')
        .then(res => res.json())
        .then(data => data.cards)
        .catch(e => console.log(`Errpr: ${e.message}`));
} 

module.exports = {
    getData
}
