const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://adminnew:passwordnew@cluster0.ut6r6.mongodb.net/mern-ecommerce', {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('mongodb connected to node')
})
mongoose.connection.on('error', () => {
    console.log('mongodb not connected to node')
})

module.exports = mongoose