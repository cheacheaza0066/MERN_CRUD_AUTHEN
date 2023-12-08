import express from "express";
import { User } from "../models/userModel.js";
const router = express.Router();


router.get('/api/admin/count', async (req, res) => {
    try {
      const adminCount = await User.countDocuments({ role: 'admin' });
      res.json({ count: adminCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Route to get user count
router.get('/api/user/count', async (req, res) => {
    try {
      const userCount = await User.countDocuments({ role: 'user' });
      res.json({ count: userCount });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export default router;
