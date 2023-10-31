import express from "express";
import{User} from '../models/USERMODEL.js'
import bcrypt  from "bcrypt";
const router = express.Router();

router.post('api/register',async(req,res)=>{
    console.log(req.body)
    try {
        const newPassword = await bcrypt.hash(req.body.password,10)
        await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            student_id: req.body.student_id,
            student_grp: req.body.student_grp,
            email: req.body.email,
            password: newPassword,
            code: req.body.code,

        })
        res.json({ status: 'ok' })

    } catch (error) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

router.post('api/login',async(req,res)=>{
    const user = await User.findOne({
        email:req.body.email
    })

    if (!user) {
        return { status: 'error', error: 'Invalid login' }
    }
    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    )
    if (isPasswordValid) {
        // const token =
    }

})