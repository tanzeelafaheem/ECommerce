import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
//app config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();
//middleware
app.use(cors());
app.use(express.json());

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product', productRouter);
app.get('/', (req, res) => {
  res.send('Server is running...');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}   );