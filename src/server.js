const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})
const cards = require('./cards.json');
server
.use(express.static('public'))
.get('/', (req, res) => {
    return res.render('index.html', { cards })
})
.get('/oms', (req, res) => {
    return res.render('partials/oms.html', { title:'OMS', descriptionTitle: 'Total conectividade e flexibilidade em toda operação', description: 'Promove uma visão e uma jornada de compra unificada para cada cliente, de forma que ele tenha uma melhor experiência, seja qual for o canal de entrada, além da visibilidade integrada dos seus estoques.'})
})
.listen(5500)