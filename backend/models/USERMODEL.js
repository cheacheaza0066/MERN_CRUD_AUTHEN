import mongoose from "mongoose";

const User = new mongoose.Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        student_id: { type: Number, required: true },
        student_grp: { type: Number, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		code: { type: String , required: true },    
    }
)

const model = mongoose.model('UserData',User)
module.exports = model