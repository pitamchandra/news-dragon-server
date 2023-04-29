const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
const category = require('./data/category.json')
const news = require('./data/news.json')

app.get('/', (req, res) =>{
    res.send('my server is running')
})

app.get('/category', (req, res) =>{
    res.send(category)
})

app.get('/news', (req, res)=>{
    res.send(news)
})

app.get('/news/:id' , (req, res) =>{
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})

app.get('/category/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    if(id === 0 ){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(categoryNews)
    }
    
})

app.listen(port, () =>{
    console.log(`listing port is : ${port}`);
})