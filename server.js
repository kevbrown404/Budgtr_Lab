const express = require('express');
const budget = require('./models/budget')
const app = express ();
const budgets = require('./models/budget')

app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.urlencoded({ extended:false }));

//routes
app.get('/budgets', (req,res) => {
    res.render('index', {budgets});
})

app.get('/budgets/:index', (req,res) => {
    let budget = budget [req.params.index]
    res.render('show', {budget: budget})
})

app.get('/budgets/new', (req,res) => {
    
})

app.post('/budgets', (req,res) => {
    
})

app.get('/*', (req, res) => {
    res.send("Bad Link");
})

app.listen(4000, () => {
    console.log(`Server is listening to port 4000`)
})