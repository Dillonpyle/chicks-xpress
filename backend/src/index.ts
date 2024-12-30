import express, { Request, Response } from 'express';
import  cors  from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("Connected to MongoDB"));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({message: "ITS OVER 9000!!!"});
});

app.listen(9001, () => {
    console.log("Server is over 9000!!!");
})
