const Bundler = require('parcel-bundler');
const express = require('express');
const server = express();
const { join } = require('path');
const { cardsHome } = require('./pages');

server.set('view engine', 'ejs');

const options = {}; 

server.get('/api/card/:id', async (req, res) => {
    res.json({ cards: await cardsHome(), foo: "foo" });
});

const bundler = new Bundler([join(__dirname, './views/index.pug'), join(__dirname, './views/contact.pug'), join(__dirname, './views/blog.pug'), join(__dirname, './views/job.pug'), join(__dirname, './views/partials/applicant-email.pug'), join(__dirname, './views/partials/emites.pug'), join(__dirname, './views/partials/myFinance.pug'),join(__dirname, './views/partials/oms.pug'), join(__dirname, './views/partials/pdvend.pug'), join(__dirname, './views/partials/store.pug'), join(__dirname, './views/partials/suite.pug')], options);
server.use(bundler.middleware());

server.use(express.urlencoded({ extended: true }));

server.listen(5500);