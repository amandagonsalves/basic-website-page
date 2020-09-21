fetch('/api/card')
 .then(res => res.json())
 .then(data => console.log(data.cards))
 .catch(e => console.log(e));


