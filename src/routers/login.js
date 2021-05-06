const route = require('express').Router()
const passport = require('passport')
require('../config/passport')

route.get('/', (req, res, next) => {
    res.render('login')
})

route.post('/', passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/' }))

module.exports = route