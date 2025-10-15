import express from 'express';
import { createBranchAdmin, loginUser } from '../controller/userCntrl/userAuth.js';
const router = express.Router();


router.post('/create-admin',createBranchAdmin)
router.post('/login',loginUser)




export default router;