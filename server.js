var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 3000;
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

// setup mongoose config
require('./server/config/mongoose.js');
// define routes and controllers
var routes = require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log('running on ', port);
})
