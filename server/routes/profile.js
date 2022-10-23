import express from 'express';
import {createProfile,getProfile} from '../controllers/profile.js';
import {verifyUser} from "../utils/verifyToken.js";

// import {createProfile,getProfile} from '../controllers/user.js';


const  router  = express.Router();


router.post("/profileuser",verifyUser, createProfile)
// router.put("/profileuser/:id", updateUser)

router.get("/profileuser/:id", getProfile)

export default router;