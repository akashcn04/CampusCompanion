import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    srn: {
        type: String,
        required: true,
        unique: true,
        match: /^PES[a-zA-Z0-9]{10}$/,
    },
    email : {
        type : String,  
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,    
    },
    tutorList : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    tuteeList : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        }
    ],
    branch : {
        type : String,
    },
    cgpa : {
        type : String,
    },
    year : {
        type : String,
    },
    skills : {
        type : String,
    },
    clubs : {
        type : String,
    },
    work_experience :{
        type : String,
    },
    other : {
        type : String,
    },
    role : {
        type : String,
    },
    rank : {
        type : Number,
        default : 0
    },
    score : {
        type : Number,
        default : 0
    }
 

},{ timestamps : true});

const User = mongoose.model('User',userSchema);
export default User;


