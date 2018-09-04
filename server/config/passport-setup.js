const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../../database/models');

passport.use(
  new GoogleStrategy({
    // options for the strategy
    callbackURL: 'auth/google/redirect', 
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
  }, (/* accessToken, refreshToken, profile, done */) => {
    // console.log(profile)
    console.log('cb fired')
  })
)

// module.exports = passport