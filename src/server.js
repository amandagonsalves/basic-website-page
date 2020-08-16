const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})
const dataCard = require('./data.json')
server
.use(express.static('public'))
.get('/', (req, res) => {
    return res.render('index.html', { dataCard })
})
.listen(5500)