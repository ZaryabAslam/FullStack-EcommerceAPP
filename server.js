const express = require('express')
const app = express()
const PORT = 8000;
var dbconnection = require('./db')
const ProductRoute = require('./routes/ProductsRoute')
const bodyparser = require('body-parser')

app.use(bodyparser.json());
app.use('/api/products', ProductRoute)

app.get('/',(req, res)=>{
    res.send('hello response from me')
})

app.listen(PORT, ()=>{
    console.log(' server running on port 8000')
})