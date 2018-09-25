var express = require('express');
var chalk = require('chalk');
var debug = require('debug');
var morgan = require('morgan')

var app = express();

app.use(morgan('tiny'));
app.get('/', function(req, res){
    res.send('Hello from the library app');
})

app.listen(3000, function(){
    debug(`listening on port ${chalk.green('3000')}`);
});