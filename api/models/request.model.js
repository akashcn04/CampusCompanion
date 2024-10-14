import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
    from : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'User'
    },
    to : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'User'
    },
    state : {
        type : String
    },
    message : {
        type : String
    }
})


const Request = mongoose.model('Request',requestSchema);
export default Request;