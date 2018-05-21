var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');


app.use(express.static(__dirname + '/public'));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Models
var models = require('./app/models');

//Sync Database
models.sequelize.sync().then(function () {
    console.log("Alright! Database is looking good!")

}).catch(function (err) {
    console.log(err, 'Something is not right with the database...')

});

//For handlebars
app.set('views', './app/views');
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.listen(port, function(err){
  if (!err)
    console.log(`App is running on localhost: ${port}...`);
  else console.log(err)
});