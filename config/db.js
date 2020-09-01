const mongoose =require('mongoose');
const config =require('config');
const URI =config.get("URI");

const connectMongo = ()=>{
    mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true,
       useFindAndModify:false,
       useCreateIndex :true})
       .then(()=>console.log('Database connected'))
       .catch(err=> {
           console.error(err)
        process.exit(1)})
}

module.exports = connectMongo;