const express = require('express');
const bodyParser = require('body-parser');

let app = express();
const PORT = process.env.PORT || 8000
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

//make public folders available
app.use(express.static('public'));

//import hbs
const exphbs = require('express-handlebars');

//set express to use handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes
const routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log('listening on http://localhost:' + PORT);
});