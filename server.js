const express = require('express')
const app = express()
require('./src/db/connect')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const signupRoute = require('./src/routers/signup')
const loginRoute = require('./src/routers/login')
const postRoute = require('./src/routers/posts')
const passport = require('passport')
require('./src/config/passport')

const PORT = process.env.PORT || 4444

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'hbs')

const sessionStore = MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/socialdb', collectionName: 'sessions' })
app.use(session({
    secret: 'qwerty123',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}))

app.use(passport.initialize())
app.use(passport.session())

// app.use((req,res,next)=>{
//     console.log(req.user)
//     next()
// })

app.use('/', express.static(__dirname + '/src/public'))
app.get('/user-detail',(req,res)=>{
    res.send(req.user)
})
app.use('/signup', signupRoute)
app.use('/home', loginRoute)
app.use('/feed', postRoute)

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})