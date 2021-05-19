import express from 'express'
const app = express()

app.get('/', function (req,res) {
    res.send('hello world!!')
})

app.listen(3000, function () {
    console.log('express app  is running on port 3000');
})