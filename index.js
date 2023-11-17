const express = require('express')
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

const NameData = [];
const NumberData = [];
const EmailData = [];


app.get('/',(req,res)=>{
    res.render("app",{Name: NameData, Number:NumberData,Email:EmailData })
})


app.post('/',(req,res)=>{
    let named = req.body.named;
    let number = req.body.number;
    let email = req.body.email;

    NameData.push(named)
    NumberData.push(number)
    EmailData.push(email)
    
    res.redirect('/')
})


app.listen(5000,()=> console.log("server is running ...."))