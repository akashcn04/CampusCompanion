import express from 'express'
import {fetchRequest,createRequest,acceptRequest,rejectRequest} from '../controllers/request.controller.js'

const router = express.Router()

router.get("/info/:id",fetchRequest);
router.post("/createRequest",createRequest)
router.post("/accept",acceptRequest)
router.post("/reject",rejectRequest)

export default router;