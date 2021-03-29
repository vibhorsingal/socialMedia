const UserSignup = require('../models/signup')
const route = require('express').Router()
const genPassword = require('../utils/passportUtil').genPassword
route.get('/', (req, res) => {
    res.render('register')
})
route.post('/', async (req, res) => {
    const user = genPassword(req.body.password)
    const newuser = new UserSignup({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        username: req.body.username,
        hash: user.hash,
        salt: user.salt
    })
    const insert = await newuser.save()
    console.log(newuser)
    res.redirect('/home')
})

module.exports = route