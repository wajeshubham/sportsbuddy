import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  city:{
    type: String,
    required: true
  }
})
export default mongoose.model("City", citySchema);
