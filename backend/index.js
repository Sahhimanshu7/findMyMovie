import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

import "./config/mongo.js";

import authRoute from "./routes/authRoutes.js";
import aiRoute from "./routes/aiRoutes.js";

const app = express();

dotenv.config();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.use("/api/user/auth", authRoute);
app.use("/api/ai/", aiRoute);

app.listen(PORT, () =>{
    console.log(`Server is lintening on ${PORT}`);
});