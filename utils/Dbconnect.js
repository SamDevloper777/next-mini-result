import mongoose from "mongoose";

const Dbconnect =()=>{

    try{
        mongoose.connect(process.env.MONGODB_URI);
    }
    catch(error)
    {
        console.log(error.message)
    }
}
export default Dbconnect