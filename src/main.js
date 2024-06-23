const express = require('express');
const app = express();

//Route
app.get('/',(req,res)=>{
    res.send("Halaman home");
});

app.get('/login',(req,res)=>{
    res.send("Halaman login");
});

app.post('/login',(req,res)=>{
    res.send("user login");
});

app.get('/register',(req,res)=>{
    res.send("halaman register");
});

app.post('/register',(req,res)=>{
    res.send("user register");
});

app.get('/logout',(req,res)=>{
    res.send("logout user");
});


app.listen(3000,()=>{
    console.log('Server berjalan di port : 3000');
});