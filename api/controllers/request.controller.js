import Request from "../models/request.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";


export const fetchRequest = async (req,res,next) => {
    try{
        const request = await Request.findById(req.params.id)
        res.status(200).json(request)
    }catch(error){
        next(error)
    }
}

export const createRequest = async (req,res,next) => {
    const {from,to,message} = req.body;

    try{

    const newRequest = new Request({from , to , state : "Active" ,message});
    await newRequest.save()

    const requestId = newRequest._id.toString();

    const user = await User.findByIdAndUpdate(
        to,
        { $push: { requestList : requestId } }, // Use $push to add requestId to requests array
        { new: true } // Return the updated document
      );

        res.status(201).json({
            "message" : "Request created successfully!"
        })
    }
    catch(error){
        next(error);  
    }

}