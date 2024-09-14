import express from 'express';
import { info ,updateUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post("/info",info)
router.post('/update/:id',verifyToken,updateUser)

export default router;