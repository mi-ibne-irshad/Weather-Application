const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000 ;
const path = require('path');
var hbs = require('hbs');
const { partials } = require('handlebars');

// public static path 
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path))

// Routing
app.get("/", (req, res)=>{
    // res.send("Welcome to Pakistan")
    res.render('index')
})
app.get("/about", (req, res)=>{
    // res.send("Welcome to Pakistan Homeland")
    res.render('about')
})
app.get("/weather", (req, res)=>{
    // res.send("Welcome to Pakistan Homeland Weather")
    res.render('weather')
})
app.get("*", (req, res)=>{
    // res.send("Opps 404 Error Page");
    res.render('404error', {
        errorMsg: 'Opps! Page Not Found'
    })
})

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})