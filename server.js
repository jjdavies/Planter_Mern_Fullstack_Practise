const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const greenhouse = require('./routes/api/greenhouse')

const app = express()
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose
    .connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
    .then (() => console.log('Connect to MongoDB'))
    .catch (err => console.log(err))


app.use('/api/greenhouse', greenhouse)


const port = process.env.PORT || 5000

app.listen(port, ()=> console.log(`Server started on ${port}`))