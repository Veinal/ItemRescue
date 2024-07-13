const AdminSchema =require('../model/adminRegSchema');

const Register = async(req,res)=>{
    try{
        const {adminName,adminEmail,adminPassword,date,status}=req.body;

        const data=await new AdminSchema({adminName,adminEmail,adminPassword,date,status})
        const savedData=await data.save();
        console.log("Registration successful")
        res.send({"insertion successful":true,savedData});
    }
    catch(error){
        console.error("some error occured!!"+error);
        res.status(500).json("some internal error");
    }
}

const Login =async(req,res)=>{
    const {adminEmail,adminPassword}=req.body;
    try {
        let admin=await AdminSchema.findOne({adminEmail});
        console.log("admin",admin);
        if(!admin){
            return res.json({error:"Invalid credential email"});
        }
        
        const data=admin.id;
        console.log(admin.id);

    } 
    catch (error) {
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!!");
    }
}

const SingleView=async(req,res)=>{
    try{
        let data = new AdminSchema.findById(req.params.id);
        if(!data){
            console.log("data not found with this id");
            return req.status(404).send("Data does not exist with this id");
        }
        else{
            console.log(data);
            res.json(data);
        }
    }
    catch(error){
        console.error("some error occured!!"+error);
        res.status(500).send("s")
    }
}

const Delete=async(req,res)=>{
    try{
        let data=await AdminSchema.findById(req.params.id);
        if(!data){
            console.log('data not found with this id');
            return res.status(404).send("Data not found with this id");
        }
        else{
            data=await AdminSchema.findByIdAndDelete(req.params.id);
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

module.exports={Register,Login,SingleView,Delete}