const router = require('express').Router();
const User=require("../model/User");
const expressValidator=require("express-validator");
const { check, validationResult } = require('express-validator');
const bcrypt =require("bcrypt");
const config=require("config");
const jwt=require("jsonwebtoken");

// @route   POST /api/user
//desc      register user
//@access public
router.post('/',[
    check("name","name is required").not().isEmpty(),
    check("email","Must be a valid email").isEmail(),
    check("password","password must be of 5 characters or more").isLength({min:5})
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()})
    try {
        let {name,email,password} =req.body;

        const user= await User.findOne({email});
        if(user) return res.status(400).json({msg:"user with this email already exists"});

        const salt=await bcrypt.genSalt(10);

        password= await bcrypt.hash(password,salt);
        const newUser=new User({
            name,email,password
        })
         
        await newUser.save()

        const payload={
            user:{id:newUser.id
            }     
        }
        jwt.sign(payload,config.get("secret"),{expiresIn:"3600"},(err,token)=>{
            if (err) throw err
            res.json({token,user:{name:newUser.name,email:newUser.email,id:newUser.id}})
        })
       // res.send("success user registartion")



    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server error")
    }

    //res.send('success')
})

module.exports =router;