import express from 'express';
import routes from './routes';
import cors from 'cors';
import dotenv from "dotenv"

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  })
);

dotenv.config()

app.use(express.json());
app.use('/api', routes);

export default app;
