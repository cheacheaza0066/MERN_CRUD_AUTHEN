import express from "express";
import { News } from "../models/NEWS.js";

const router = express.Router();


// Add News
router.post("/api/news/add",async(req,res)=>{
    console.log(req.body)
    try {
        if (!req.body.author ||
            !req.body.headNews ||
            !req.body.bodyNews 
            
            ) {
            return res.status(400).send({
                message : "กรุณากรอกให้ครบทุกช่อง"
            });
        }
        await News.create({
                author : req.body.author,
                headNews : req.body.headNews,
                bodyNews : req.body.bodyNews,
                date : req.body.date
        })
        res.json({status : "เพิ่มข้อมูลข่าวเรียบร้อย"})
    } catch (error) {
        res.json({
            status: "error",
           
          });
    }
});

// get all News
router.get("/api/news/getall",async(req,res)=>{
    try {
        const news = await News.find({});
        return res.status(200).json({
            data:news
        });

        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})
// get one News
router.get('/api/news/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const news = await News.findById(id); // Corrected from User.findById(id)
        if (!news) {
            return res.status(404).json({ message: "News not found" });
        }
        return res.status(200).json(news);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


// Delete News
router.delete('/api/news/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await News.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'ไม่พบ ID' });
        }
        return res.status(200).send({ message: 'ลบสำเร็จ' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


export default router;
