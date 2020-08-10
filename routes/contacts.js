const router = require('express').Router();
const Contact= require("../model/Contacts");
const auth=require("../middlewares/auth");
const {check,validationResult} =require("express-validator");

// @route   GET /api/contact
//desc      get all contacts 
//@access private
router.get('/',auth,async(req,res)=>{
    try {
        const contacts=await Contact.find({user:req.user.id}).sort({date:-1});
        res.json(contacts)
        
    } catch (error) {
        console.error(error)
        res.status(500).json("Internl Server Error")
        
    };

    //res.send('get all contacts users')
});

// @route   POST /api/contacts
//desc      add contacts
//@access private
router.post('/',[auth,[
    check("name","Name cannot be empty").exists()
]],async(req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()});
        let {name,email,phone,type}=req.body

        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user:req.user.id

        })
        await newContact.save()

        res.json(newContact)
        
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server error")
    }

    //res.send('added a contact')
});

// @route   PUT /api/contacts/:id
//desc      update contact
//@access private
router.put('/:id',auth,async(req,res)=>{
    const {name,phone,email,type}=req.body;

const contactDetails={};
//check what was passed in and push to object
if(name)  contactDetails.name=name;
if(phone)  contactDetails.phone=phone;
if(email)  contactDetails.email=email;
if(type)  contactDetails.type=type;

try {
    //check if contact exists
    let  contact=await Contact.findById(req.params.id);
    if(!contact) return res.status(404).json({msg:'contact not found'})

    //check the contact belongs to the user
    if (contact.user.toString()!==req.user.id) return res.status(401).json({msg:"you dont have the right for this request"});

     contact=await Contact.findByIdAndUpdate(req.params.id,{$set:contactDetails},{new:true});
     res.json(contact);
        
        
    } catch (error) {
        console.error(error);
        res.status(400).json("Internal server Error")
    }
   // res.send('updated a contact')
})


// @route   DELETE /api/contacts/:id
//desc      delete users user
//@access private
router.delete('/:id',auth,async(req,res)=>{
    try {
        let  contact=await Contact.findById(req.params.id);
    if(!contact) return res.status(404).json({msg:'contact not found'})

    //check the contact belongs to the user
    if (contact.user.toString()!==req.user.id) return res.status(401).json({msg:"you dont have the right for this request"});

    await Contact.findByIdAndRemove(req.params.id)
    res.json({msg:"contact deleted successfully"})

    } catch (error) {
        console.error(error);
        res.status(401).json("Internal Server Error")
        
    }

  //  res.send('delete contact')
})


module.exports =router;