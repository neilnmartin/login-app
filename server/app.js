var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var exphbs = require('express-handlebars');
// var expressValidator = require('express-validator');
// var flash = require('connect-flash');
// var session = require('express-session');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var mongo = require('mongo')
var mongoose = require('mongoose');
const keys = require('./config/keys')
// mongoose.connect('mongodb://localhost/loginapp');
// var db = mongoose.connection;

const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use('/auth', authRoutes)

// mongodb

mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mlabs mongodb')
});

// create home route:
app.get('/', (req, res) => {
  res.render('home');
});





app.listen(port, () => console.log(`app is listening on ${port}`));

