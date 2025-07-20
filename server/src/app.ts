import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
import dotenv from "dotenv"

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests from any localhost port or undefined (like Postman)
      if (
        !origin ||
        origin.startsWith('http://localhost:') ||
        origin.startsWith('https://localhost:')
      ) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

dotenv.config()

app.use(express.json());
app.use('/api', routes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

export default app;
