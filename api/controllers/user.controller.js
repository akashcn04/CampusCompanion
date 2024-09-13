import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"

export const info = async (req,res,next) => {
    const { id } = req.body
    try{
        const data = await User.findById(id)
        res.status(200).json(data)
    }
    catch(error){
        next(error)
    }
}