const { request } = require("express");

const express =require("express");
const connectMongo = require("./config/db");
const app=express();
const PORT =process.env.PORT || 8080;

//parse body 
app.use(express.json({extended:false}))


//bring in database
connectMongo()



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