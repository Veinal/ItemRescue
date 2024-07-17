const UserSchema=require('../model/userRegSchema');

const Register=async(req,res)=>{
    try{
        const {userName,email,password,phone,date,status}=req.body;
        
        const data =await new UserSchema({userName,email,password,phone,date,status})
        const savedData=data.save();
        console.log("User Registration success");
        res.send({"Registration successful":true,savedData});
    }
    catch(error){
        console.error("some error occured!!!"+ error);
        res.status(500).json("some internal error!!");
    }
}

const Login =async(req,res)=>{
    const {email,password}=req.body;
    try {
        let user=await UserSchema.findOne({email});
        console.log("user",user);
        if(!user){
            return res.json({error:"Invalid credential email"});
        }
        if(user.password!== password){
            return res.status(400).json({error:"Invalid email and password!!"})
        }
        console.log(user.id);
        res.json({success:true, userId:user.id})
    } 
    catch (error) {
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!!");
    }
}

const View = async(req,res)=>{
    try{
        const data= await UserSchema.find()
        console.log(data);
        res.json(data)
    }
    catch(error){
        console.error("some error occured!!"+error)
        res.status(500).json("some internal error!!!")
    }
}

const SingleView=async(req,res)=>{
    try{
        let data=await UserSchema.findById(req.params.id)
        if(!data){
            console.log("data not found with this ID");
            return res.status(404).send("Data does not exist with this Id")
        }
        else{
            console.log(data);
            res.json(data)
        }
    }
    catch(error){
        console.error("some error occured!!"+error)
        res.status(500).json("some internal error!!!")
    }
}

const Delete=async(req,res)=>{
    try{
        let data=await UserSchema.findById(req.params.id);
        if(!data){
            console.log('data not found with this id');
            return res.status(404).send("Data not found with this id");
        }
        else{
            data=await UserSchema.findByIdAndDelete(req.params.id);
            console.log("data deleted successfully");
            res.json({"success":true,"Deleted data":data});
        }
    }
    catch(error){
        console.error("some error occured!!"+error);
        res.status(500).json("some internal error!!");
    }
}

// const Update

module.exports={Register,Login,View,SingleView,Delete};