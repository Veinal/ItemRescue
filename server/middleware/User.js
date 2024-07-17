const jwt=require('jsonwebtoken');
const JWT_SECRET="user";

const fetchUSer= (req,res,next)=>{
    const token2=req.header("UserToken")
    if(!token2){
        res.status(401).send({error:"Access denied!! No token provided"})
    }
    try{
        const data2=jwt.verify(token2,JWT_SECRET)
        console.log("user id:",data2)
        req.user=data2
        next()
    }
    catch(err){
        res.status(403).send({message:"Invalid Token"})
    }
}

module.exports=fetchUSer