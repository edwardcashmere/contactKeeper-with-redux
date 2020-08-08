const router = require('express').Router()

// @route   POST /api/user
//desc      register user
//@access public
router.post('/',(req,res)=>{
    res.send('register users')
})

module.exports =router;