import express from "express";
import cors from "cors";
import "dotenv/config";
import connectCloudinary from "./config/cloudinary.js";
import db from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { ensureUsersTable } from "./models/userModel.js";
import storeOwnerRoutes from "./routes/storeOwnerRoutes.js";
import { ensureStoreOwnersTable } from "./models/storeOwnerModel.js";
import adminRoutes from "./routes/adminRoutes.js";

// App config
const app = express();
const port = process.env.PORT || 8080;
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/store-owners", storeOwnerRoutes);
app.use("/api/admin", adminRoutes);

ensureUsersTable().catch((error) => {
    console.error("Failed to ensure users table:", error);
});

ensureStoreOwnersTable().catch((error) => {
    console.error("Failed to ensure store owners table:", error);
});

app.get("/", (req, res) => {
    res.send("Server Started.");
});

app.listen(port, () => {
    console.log(`App was listen on port ${port}`);
})

// console.log({
//   host: process.env.MYSQLHOST,
//   port: process.env.MYSQLPORT,
//   user: process.env.MYSQLUSER,
//   database: process.env.MYSQL_DATABASE
// });