import Event from "../models/Event.js";
export const createEvent = async (req, res, next) => {
  let event = new Event(req.body);
  try {
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    next(err.message);
  }
};

// export const updateEvent = async(req,res,next)=>{
//     try{
//         let updateEvent =await Event.findByIdAndUpdate(
//          req.params.id,
//          {$set:req.body},
//          {new:true}
//         );
//         res.status(200).json(updateEvent);
//     }catch(err){
//         next(err);
//     }
// }

export const updateEvent = async (req, res, next) => {
  await Event.findOne({ _id: req.params.id })
    .populate("postedBy", "_id")
    .then((post) => {
      if (post.postedBy._id.toString() === req.user.id.toString()) {
        post
          .updateOne({ $set:req.body}, { new: true })
          .then((result) =>{return res.json(result)})
          .catch((err) => next(err));
      }
    })
    .catch((err) => next(err));
};

//  export const deleteEvent = async(req,res,next)=>{
//     try{
//         let deleteEvent =await Event.findByIdAndDelete(
//          req.params.id
//         );
//         res.status(200).json(deleteEvent);
//         }
//     catch(err){
//         next(err);
//     }
// }

export const deleteEvent = async (req, res, next) => {
  await Event.findOne({ _id: req.params.id })
    .populate("postedBy", "_id")
    .then((post) => {
      if (post.postedBy._id.toString() === req.user.id.toString()) {
        post
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err.message);
          });
        }
    })
    .catch((err) => next(err.message));
};

export const getEvent = async (req, res, next) => {
  try {
    let event = await Event.find()
      .populate("postedBy", "username")
      .populate("comments.postedBy", "username")
      .populate("joinEvent", "username");

    res.status(200).json(event);
  } catch (err) {
    next(err.message);
  }
};

export const createComment = async (req, res, next) => {
  await Event.findByIdAndUpdate(
  req.body.id,
    {
      $push: { comments: { comment: req.body.value, postedBy: req.user.id } },
    },
    { new: true }
  )
    .populate("comments.postedBy", "username")
    .then((result) => {
      res.status(200).json({
        message: result,
      });
    })
    .catch((err) => next(err));
};

export const deleteComment = async (req, res, next) => {
  if (req.body.commentPostedBy === req.user.id) {
    await Event.findByIdAndUpdate(
      {_id:req.body.eventId},
      { $pull: { comments: { comment: req.body.value } } },
      { new: true }
    ).then((result) => {
        return res.status(400).json({
          message: result,
        });
      })
      .catch((err) => next(err.message));
  }
};


export const joinEvent = async(req, res,next) => {
  await Event.findByIdAndUpdate(
    {_id:req.body.eventId},
    { $push: { joinEvent: req.user.id},
    $inc : {numberOfPlayer : -1} },
    { new: true }
  ).populate("joinEvent","username")
  .then((result) => {
        return res.status(400).json({
          message: result.message,
        });
    }).catch((err)=>next(err.message));
};


// export const joinEvent = async (req, res, next) => {
//   Event.findOne(
//     { _id: req.body.eventId }
//     // { $push: { joinEvent: req.user.id } },
//     // { new: true }
//   )
//     // .populate("joinEvent", "username")
//     .then((post) => {
//       // if (err || !post) {
//       //   return res.status(422).json({ error: err });
//       // }
//       let count = 0;

//       for (let i of post.joinEvent) {
//         if (i["i"] === req.user.id) {
//           console.log("you joined");
//           return res.status(400).json({ error: "You already join this event" });
//         }
//         count++;
//       }
//       post
//         .update({ $push: { joinEvent: req.user.id } }, { new: true })
//         .then((result) => {
//           res.json(result);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => next(err));
// };
