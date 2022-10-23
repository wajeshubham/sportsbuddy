import express from "express";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvent,
  createComment,
  deleteComment,
  joinEvent,
} from "../controllers/event.js";
import {verifyUser,verifyAdmin } from "../utils/verifyToken.js";
import {
  createSport,
  updateSport,
  deleteSport,
  getSports,
  addCity,
  updateCity,
  deleteCity,
  getCity, 
  getArea,
  updateArea,
  deleteArea,
  addArea,
} from "../controllers/admin.js";
// import auth from "../utils/auth.js";

// import { AdminDash } from "../controllers/admin.js";

const router = express.Router();
router.post("/event",verifyUser, createEvent);
router.put("/:id", verifyUser, updateEvent);
router.delete("/:id",verifyUser,  deleteEvent);
router.get("/find", getEvent);
router.put("/add_comment",verifyUser,  createComment);
router.put("/delete_comment", verifyUser, deleteComment);
router.put("/join_event", verifyUser, joinEvent);


// router.get("/comment", getComment);


router.post("/createsport",verifyAdmin, createSport);
router.put("/updatesport/:id", verifyAdmin, updateSport);
router.delete("/delete/:id", verifyAdmin, deleteSport);
router.get("/get", getSports);


router.post("/city", verifyAdmin, addCity);
router.put("/updatecity/:id", verifyAdmin, updateCity);
router.delete("/deletecity/:id", verifyAdmin, deleteCity);
router.get("/getcity", getCity);

router.post('/area',verifyAdmin,addArea);
router.put('/update-area/:id',verifyAdmin,updateArea);
router.delete("/delete-area/:id", verifyAdmin, deleteArea);
router.get("/get-area", getArea);

export default router;
