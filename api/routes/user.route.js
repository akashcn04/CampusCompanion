import express from 'express';
import { info ,becomeTutor,fetchTutors} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post("/info",info)
router.post('/update/:id',verifyToken,becomeTutor)
router.get('/fetchTutors',fetchTutors)

export default router;