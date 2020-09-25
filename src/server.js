const Bundler = require('parcel-bundler');
const express = require('express');
const server = express();
const { join } = require('path');
const { cardsHome, getCard } = require('./pages');
const { renderPost } = require('../public/scripts/renderPost');
const db = require('./database/db');

server.set('view engine', 'ejs');

const options = {}; 

server.get('/api/card/:id', async (req, res) => {
    const id = req.params.id;
    res.json({ cards: await cardsHome(), card: await getCard(id) });
});

const bundler = new Bundler([join(__dirname, './views/index.pug'), join(__dirname, './views/contact.pug'), join(__dirname, './views/blog.pug'), join(__dirname, './views/job.pug'), join(__dirname, './views/partials/applicant-email.pug'), join(__dirname, './views/partials/emites.pug'), join(__dirname, './views/partials/myFinance.pug'),join(__dirname, './views/partials/oms.pug'), join(__dirname, './views/partials/pdvend.pug'), join(__dirname, './views/partials/store.pug'), join(__dirname, './views/partials/suite.pug')], options);
server.use(bundler.middleware());

server.use(express.urlencoded({ extended: true }));

server.listen(5500);