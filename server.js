const { request } = require("express");

const express =require("express");
const app=express();
const PORT =process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.json('Hello world')
})


//bring in routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/users',require('./routes/users'));

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})