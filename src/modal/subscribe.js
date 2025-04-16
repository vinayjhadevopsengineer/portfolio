import mongoose from "mongoose";


let subscriberschema = new mongoose.Schema({
    email : {
        type : String , 
        required : true , 
        unique : true,
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})


let subscribemodel = mongoose.models.user || mongoose.model("user" , subscriberschema);

export default subscribemodel;