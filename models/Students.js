import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    fatherName:{
        type:String,
        required:true,
    },
    schoolName:{
        type:String,
        required:true,
    },
    sci:{
        type:Number,
        required:true,
    },
    sst:{
        type:Number,
        required:true,
    },
    maths:{
        type:Number,
        required:true,
    },
    hindi:{
        type:Number,
        required:true,
    },
    eng:{
        type:Number,
        required:true,
    },
    dp:{
        type:String,

    }
},{timestamps:true})



const Students= mongoose.models.Students || mongoose.model("Students",StudentSchema); 

export default Students