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

},{ timestamps : true});

const User = mongoose.model('User',userSchema);
export default User;