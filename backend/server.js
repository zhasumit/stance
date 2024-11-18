import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // parse req.body
app.use(express.urlencoded({ extended: true })); //parse form data

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server up @ http://localhost:${PORT}`);
    connectMongoDB();
});
