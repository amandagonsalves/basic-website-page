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
.get('/pdvend', (req, res) => {
    return res.render('partials/pdvend.html', { title:'PDVend', descriptionTitle: 'PDV completo e eficiente para o seu negócio', description: 'Aplicativo para Pontos de Venda que te permite ter gestão e controle do seu negócio, com facilidade e mobilidade. Sua loja aberta onde você estiver. '})
})
.get('/emites', (req, res) => {
    return res.render('partials/emites.html', { title:'Emites', descriptionTitle: 'Emissor de notas fiscais eletrônicas', description: 'Integra-se a sistemas de ponto de venda, marketplaces, e-commerces e smart terminals. Emita notas fiscais eletrônicas independente do seu tipo de atividade ou modelo de negócios e fora do seu ERP.'})
})
.get('/store', (req, res) => {
    return res.render('partials/store.html', { title:'Store', descriptionTitle: 'Comece a vender online rápido', description: 'Monte seu E-commerce com plataforma multilojas e design responsivo para vendas pela web e celular.'})
})
.get('/suite', (req, res) => {
    return res.render('partials/suite.html', { title:'Suíte Omnichannel', descriptionTitle: 'Qualquer canal, experiência única', description: 'Visão única dos seus pedidos em vendas online em marketplaces, ecommerce e sua loja física. Veja seus estoques integrados, com inteligência fiscal e menos infraestrutura.'})
})
.get('/myFinance', (req, res) => {
    return res.render('partials/myFinance.html', { title:'MyFinance', descriptionTitle: 'Gestão financeira acessível e integrada', description: 'Permite que você organize os recebíveis, integre com o banco, classifique os lançamentos e faça muito mais, no smartphone, tablet ou computador.'})
})
.listen(5500)