import mongoose from "mongoose";
// https://us06web.zoom.us/j/84973590390
const adminSchema = new mongoose.Schema({

    sport:[{
        type:String,
        required:true
    }],
    city:[{
        type:String,
        required:true
    }],
    area:[{
        type:String,
        required:true
    }],

})

export default mongoose.model("Admin",adminSchema);