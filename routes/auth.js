const router = require('express').Router()

// @route   GET /api/auth
//desc      get logged in user
//@access private
router.get('/',(req,res)=>{
    res.send('name of user')
});


// @route   POST /api/auth
//desc      log in a user  user
//@access public
router.post('/',(req,res)=>{
    res.send('user logged in')
});


module.exports =router;