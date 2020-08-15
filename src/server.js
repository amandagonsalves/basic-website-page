const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})
server
.use(express.static('public'))
.get('/', (req, res) => {
    return res.render('index.html')
})
.listen(5500)