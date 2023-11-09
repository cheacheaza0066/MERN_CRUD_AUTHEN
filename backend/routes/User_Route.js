import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
const router = express.Router();
import jwt from "jsonwebtoken";
const JWT_SECRET = "secret123";
router.get("/", (req, res) => {
  return res.send("Welcome test");
});
// ข้อมูล User ทั้งหมด
router.get("/api/getAllUser", async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// ลงทะเบียน User
router.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    if (
      !req.body.firstname ||
      !req.body.lastname ||
      !req.body.student_id ||
      !req.body.student_grp ||
      !req.body.email ||
      !req.body.password ||
      !req.body.code
    ) {
      return res.status(400).send({
        message: "กรุณากรอกให้ครบทุกช่อง",
      });
    }
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      student_id: req.body.student_id,
      student_grp: req.body.student_grp,
      email: req.body.email,
      password: newPassword,
      code: req.body.code,
    });
    // res.json({ status: "ลงทะเบียนเรียบร้อย" });
    res.json({ status: "ลงทะเบียนเรียบร้อย", user: { token, firstname: req.body.firstname} });

  } catch (error) {
    res.json({
      status: "error",
      error: "อีเมลนี้ถูกใช้งานเเล้ว หรือ โค๊ดไม่ถูกต้อง",
    });
  }
});

router.get('/api/getall',async (req,res)=>{
  try {
    const user = await User.find({})
  return res.status(200).json({
    data:user
  })
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
  
})

router.delete('/api/:id',async(req,res)=>{
    try {
      const {id} = req.params
      const result = await User.findByIdAndDelete(id);
      if (!result) {
        return res.status(404).json({ message: 'ไม่พบไอดี' });
      }
  
      return res.status(200).send({ message: 'ลบสำเร็จ' });    } 
      catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
    }
})

router.post("/api/login", async (req, res) => {
    try {
    //   console.log(req.body.email_Login);
    //   console.log(req.body.password_Login);
  
      const user = await User.findOne({
        email: req.body.email_Login,
      });
  
      if (!user) {
        return res.status(401).json({ status: "error", error: "ไม่พบผู้ใช้งาน" });
      }
  
      const isPasswordValid = await bcrypt.compare(
        req.body.password_Login,
        user.password
      );
  
      if (isPasswordValid) {

        const token = jwt.sign(
          {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          },
          JWT_SECRET,
          { expiresIn: "1d" }
        );
  
        // return res.json({ status: "ok", user: token });
        return res.json({ status: "ok", user: { token, firstname: user.firstname } });
        

      } else {
        return res.status(401).json({ status: "error", error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" });
      }
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ status: "error", error: "Internal server error" });
    }
  });
  

export default router;
