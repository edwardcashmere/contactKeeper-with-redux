const jwt=require("jsonwebtoken");
const config=require("config");

module.exports=(req,res,next)=>{

    const token=req.header("x-auth-token");
    if(!token) return res.status(401).json({msg:"not authorised for this action"});

    try {
        const decoded=jwt.verify(token,config.get("secret"));
        req.user=decoded.user;
        next();
        
    } catch (error) {
        res.status(401).json({msg:"token is Invalid"})
        
    }

    
    
}