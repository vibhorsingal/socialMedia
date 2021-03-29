const route = require('express').Router()
const passport = require('passport')
require('../config/passport')

route.get('/', (req, res, next) => {
    res.render('home')
})

route.post('/', passport.authenticate('local', { failureRedirect: '/home', successRedirect: '/' }))

module.exports = route