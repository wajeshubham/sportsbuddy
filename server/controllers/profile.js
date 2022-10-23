import Profile from "../models/profile.js";

export const createProfile = async (req, res, next) => {
  let profile = new Profile(req.body);
  try {
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    next(err.message);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    let user = await Profile.findOne({postedBy:req.params.id})
    .populate("postedBy","username")
    res.status(200).json(user);
  } catch (err) {
    next(err.message);
  }
};

// export const updateUser = async(req,res,next)=>{
//     try{
//         let updateEvent =await User.findByIdAndUpdate(
//          req.params.id,
//          {$set:req.body},
//          {new:true}
//         );
//         res.status(200).json(updateEvent);
//     }catch(err){
//         next(err);
//     }
// }