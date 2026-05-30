import express from "express";
import cors from "cors";
import "dotenv/config";
// import connectCloudinary from "./config/cloudinary.js";
import db from "./config/db.js";

// App config
const app = express();
const port = process.env.PORT || 8080;
// connectCloudinary();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server Started.");
});

app.listen(port, () => {
    console.log(`App was listen on port ${port}`);
})