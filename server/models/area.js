import mongoose from "mongoose";

const areaSchema = new mongoose.Schema({
  area:{
    type: String,
    required: true
  }
})
export default mongoose.model("Area", areaSchema);