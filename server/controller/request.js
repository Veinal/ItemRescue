const ReqSchema=require('../model/requestSchema');

const Insert=async(req,res)=>{
    try{
        const {reqItem,desc,date,status}=req.body;
        const data = await new ReqSchema({reqItem,desc,date,status})
        const savedData =await data.save()
        console.log("insertion success");
        res.send({"insertion successful":true,savedData})
    }
    catch(error){
        console.error("some error occured!!"+error)
        res.status(500).json("some internal error!!!")
    }
}

const View = async(req,res)=>{
    try{
        const data= await ReqSchema.find()
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
        let data=await ReqSchema.findById(req.params.id)
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

const Delete = async(req,res)=>{
    try{
        let data=await ReqSchema.findById(req.params.id)
        if(!data){
            console.log("Data not found with this ID");
            return res.status(404).send("Data does not exist with this ID")
        }
        else{
            data= await ReqSchema.findByIdAndDelete(req.params.id)
            console.log("Data deleted successfully");
            res.json({"Success":true,"Deleted Data":data})
        }
    }
    catch(error){
        console.error("some error occured!!"+error)
        res.status(500).json("some internal error!!!")
    }
}

// const Update

module.exports={Insert,View,SingleView,Delete};