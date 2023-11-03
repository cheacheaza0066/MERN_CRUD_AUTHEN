import mongoose from "mongoose";

const userSchema  = mongoose.Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        student_id: { type: String, required: true },
        student_grp: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		code: { type: String , required: true },    
    }
)


export const User = mongoose.model('User',userSchema)