const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
const category = require('./data/category.json')

app.get('/', (req, res) =>{
    res.send('hello sdfsdf express')
})

app.get('/category', (req, res) =>{
    res.send(category)
})

app.listen(port, () =>{
    console.log(`listing kkkdd port is : ${port}`);
})