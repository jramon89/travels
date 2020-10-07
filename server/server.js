const express = require('express');
const request = require('request');
const mongoose = require('./config/mongoose');
const config = require('./config/config');
const routes = require('./routes/main.routes')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Accept, user, X-Requested-With, Content-Type, Authorization');
    next();
});

mongoose.connect();

app.use('/api', routes)

app.get('/api/:id', function(req, res) {
    res.send({
        data: []
    })
})

app.listen(config.port, function() {
    console.log('Server running on port: '+config.port);
})
