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
        { $push: { recievedRequestList : requestId } }, // Use $push to add requestId to requests array
        { new: true } // Return the updated document
    );

    const curr_user = await User.findByIdAndUpdate(
        from,
        { $push: { requestedTutors : to ,sentRequestList : requestId} }, // Use $push to add requestId to requests array
        { new: true } // Return the updated document
    );

    

        res.status(201).json({
            "message" : "Request created successfully!",
            user,
            curr_user,
            newRequest
        })
    }
    catch(error){
        next(error);  
    }

}

export const acceptRequest = async (req, res) => {
    try {
        // Extract myId, requestedTuteeId, and requestId from req.body
        const { myId, requestedTuteeId, requestId } = req.body;

        // Perform all updates in parallel using Promise.all for better performance
        const [tutor_user, tutee_user, updatedRequest] = await Promise.all([
            // Update the tutor_user to add tutee to their tuteeList
            User.findByIdAndUpdate(
                myId,
                { $push: { tuteeList: requestedTuteeId } },
                { new: true }
            ),

            // Update the tutee_user to add tutor to tutorList and remove from requestedTutors
            User.findByIdAndUpdate(
                requestedTuteeId,
                {
                    $push: { tutorList: myId },
                    $pull: { requestedTutors: myId }
                },
                { new: true }
            ),

            // Update the request status to 'Accepted'
            Request.findByIdAndUpdate(
                requestId,
                { state: 'Accepted' },
                { new: true }
            )
        ]);

        // Send a success response with the updated data
        res.status(200).json({
            message: 'Request accepted successfully',
            tutor_user,
            tutee_user,
            updatedRequest
        });
    } catch (error) {
        // Handle any errors and return an appropriate error response
        console.error('Error accepting request:', error);
        res.status(500).json({ message: 'Error accepting request', error: error.message });
    }
};


export const rejectRequest = async (req, res) => {
    try {
        // Extract myId, requestedTuteeId, and requestId from req.body
        const { myId, requestedTuteeId, requestId } = req.body;

        // Perform all updates concurrently using Promise.all for better performance
        const [tutee_user, updatedRequest] = await Promise.all([
            // Update the tutee_user to remove tutor from requestedTutors
            User.findByIdAndUpdate(
                requestedTuteeId,
                { $pull: { requestedTutors: myId } }, // Remove myId from requestedTutors
                { new: true }
            ),

            // Update the request status to 'Rejected'
            Request.findByIdAndUpdate(
                requestId,
                { state: 'Rejected' }, // Set request state to "Rejected"
                { new: true }
            )
        ]);

        // Send a success response with the updated data
        res.status(200).json({
            message: 'Request rejected successfully',
            tutee_user,
            updatedRequest
        });
    } catch (error) {
        // Handle any errors and return an appropriate error response
        console.error('Error rejecting request:', error);
        res.status(500).json({ message: 'Error rejecting request', error: error.message });
    }
};
