const router = require('express').Router();
const User=require("../model/User")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const {check, validationResult}=require("express-validator");
const config=require("config");
const auth=require("../middlewares/auth");



// @route   get /api/auth
//desc      log in a user  user
//@access private
router.get('/',auth,async(req,res)=>{
    try {
        const user=await User.findById(req.user.id).select("-password");
        res.status(200).json(user)
        
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error")
        
    }

     //res.send('name of user')
  });
  
  





// @route   POST /api/auth
//desc       log in user
//@access public
router.post('/',[
    check("email","email must be valid").isEmail(),
    check("password","password cannot be empty").exists()
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()})

    try {
        let {email, password}=req.body
        const user=await User.findOne({email});
        if (!user) return res.status(400).json({msg:"Invalid Credentials"});

        const match=await bcrypt.compare(password,user.password)
        if(!match) return res.status(400).json({msg:"Invalid Credentials"});

        const payload={
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,config.get("secret"),{expiresIn:"3600s"},(err,token)=>{
            if (err) throw err;
            res.json({token,user:{id:user.id,name:user.name,email:user.email}})
        })
        
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error")
        
    }

   // res.send('name of user')
});



module.exports =router;