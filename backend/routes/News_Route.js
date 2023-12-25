import express from "express";
import { News } from "../models/NEWS";

const router = express.Router();

router.post('/api/news/add',(req,res)=>{
    console.log(req.body)
    try {
        
    } catch (error) {
        res.json({
            status: "error",
            error: "อีเมลนี้ถูกใช้งานเเล้ว หรือ โค๊ดไม่ถูกต้อง",
          });
    }
});