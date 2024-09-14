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

export const updateUser = async (req,res,next) => {

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set : {
                branch : req.body.branch,
                cgpa : req.body.cgpa,
                year : req.body.year,
                clubs : req.body.clubs,
                skills : req.body.skills,
                work_experience : req.body.work_experience,
                other : req.body.other
            }
        },{new : true})

        const {password,...rest} = updatedUser._doc
        res.status(200).json(rest)

    }catch(error){
        next(error)
    }
}