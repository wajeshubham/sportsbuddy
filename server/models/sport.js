import mongoose from "mongoose";

const sportSchema = new mongoose.Schema({
  sport: {
    type: String,
    required: true
  }

});
// export default mongoose.model("Admin", sportSchema);

// const citySchema = new mongoose.Schema({
//   city:{
//     type: String
//   }
// })
// // export default mongoose.model("City", citySchema);

// const locationSchema = new mongoose.Schema({
//   location:{
//     type: String
//   }
// })
export default mongoose.model("Sport", sportSchema);

