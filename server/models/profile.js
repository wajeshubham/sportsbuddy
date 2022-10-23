import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  favoriteSport: {
    type: [String],
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Profile", profileSchema);
