const express = require('express');
const drinks = require('./models/drinks');

const app = express();

const port = 3000;


app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.get("/drinks", (req, res) => {
    res.render('drinks_index.ejs', { 
    'allDrinks': drinks });
});

// app.get("/drinks/:id", (req, res) => {
//     res.send(req.params.id);
// });


app.get("/drinks/:indexOfDrinksArray", (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.indexOfDrinksArray],
    });
});













app.listen(port, () => {
    console.log("listening on port", port);
});