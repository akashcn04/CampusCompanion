import express from 'express'
import {fetchRequest,createRequest} from '../controllers/request.controller.js'

const router = express.Router()

router.get("/info/:id",fetchRequest);
router.post("/createRequest",createRequest)

export default router;