const router = require('express').Router();

// @route   GET /api/contact
//desc      get all contacts 
//@access private
router.get('/',(req,res)=>{
    res.send('get all contacts users')
});

// @route   POST /api/contacts
//desc      add contacts
//@access private
router.post('/',(req,res)=>{
    res.send('added a contact')
});

// @route   PUT /api/contacts/:id
//desc      update contact
//@access private
router.put('/:id',(req,res)=>{
    res.send('updated a contact')
})


// @route   DELETE /api/contacts/:id
//desc      delete users user
//@access private
router.delete('/:id',(req,res)=>{
    res.send('delete contact')
})


module.exports =router;