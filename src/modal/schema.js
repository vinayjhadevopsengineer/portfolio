import mongoose from "mongoose";


let contactschema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Please provide your name"]
    },
    email : {
        type : String , 
        required : [true , "please provide your email"],
        unique:true
    },
    number : { 
        type : String ,
        required : [true , "please provide your mobile Number"]
    },
    subject : {
        type : String , 
        required : [true , "Mention your subject topic "]
    },
    comment : {
        type : String,
        required : [true , "Please provide about subject description"]

    }
});

const Comment = mongoose.models.contact || mongoose.model("contact", contactschema);
export default Comment;


