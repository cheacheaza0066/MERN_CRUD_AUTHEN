import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routes/User_Route.js';
import AdminDashboard from './routes/Admin_Dashboard.js'
import NewsRouter from './routes/News_Route.js'

const app = express()
app.use(express.json())
const PORT = 5555
const MONGODB_URL = 'mongodb+srv://Admin:g0GoqY5ppoIaVqpO@clonebundit.4gsi40x.mongodb.net/?retryWrites=true&w=majority'
app.use(cors());     



app.use('/', userRouter);
app.use('/', AdminDashboard);
app.use('/',NewsRouter)

mongoose.connect(MONGODB_URL)
  .then(() => {
    console.log('Connect success');
    app.listen(PORT, () => console.log(`App is running in port: ${PORT}`));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
