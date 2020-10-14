const mongoose=require("mongoose");
const config=require('config');
const db=config.get("mongoURI");


const connectDB = ()=>{
    mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true})
    .then(()=>console.log("connected to db"))
    .catch(err=>{
        console.log(err.message)
        process.exit(1)})
};

module.exports=connectDB;