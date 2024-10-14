import Request from "../models/request.model.js";
import { errorHandler } from "../utils/error.js";


export const fetchRequest = async (req,res,next) => {
    try{
        const request = await Request.findById(req.params.id)
        res.status(200).json(request)
    }catch(error){
        next(error)
    }
}