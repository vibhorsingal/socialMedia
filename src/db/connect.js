const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/socialdb', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection successful')
}).catch((e) => {
    console.log('could not connect')
})

