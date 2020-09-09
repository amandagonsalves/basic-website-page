const Bundler = require('parcel-bundler');
const server = require('express')();
const { join } = require('path');

server.set('view engine', 'ejs');

const options = {}; 

const bundler = new Bundler([join(__dirname, './views/index.pug'), join(__dirname, './views/contact.pug'), join(__dirname, './views/blog.pug'), join(__dirname, './views/work-with-us.pug'), join(__dirname, './views/partials/applicant-email.pug'), join(__dirname, './views/partials/emites.pug'), join(__dirname, './views/partials/myFinance.pug'),join(__dirname, './views/partials/oms.pug'), join(__dirname, './views/partials/pdvend.pug'), join(__dirname, './views/partials/store.pug'), join(__dirname, './views/partials/suite.pug')], options);

server.use(bundler.middleware());

server.listen(5500);