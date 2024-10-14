import express from 'express'
import {fetchRequest} from '../controllers/request.controller.js'

const router = express.Router()

router.get("/info/:id",fetchRequest);

export default router;