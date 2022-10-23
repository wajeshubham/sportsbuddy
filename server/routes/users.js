// import express from 'express';
// import { verifyToken, verifyUser ,verifyAdmin} from "../utils/verifyToken.js";

// const router = express.Router();

// router.get("/checkauthentication", verifyToken , (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser , (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin , (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all account")
// })

// //import middleware 

// //api routes

// export default router;

// import express from 'express';
// import {userProfile} from '../controllers/user.js';

// const  router  = express.Router();


// router.get("/profile/:id", userProfile)
// export default router;
