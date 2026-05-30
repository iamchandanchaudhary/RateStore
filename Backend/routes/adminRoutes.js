import { Router } from "express";
import {
	listRegisteredStoreOwners,
	listRegisteredUsers,
	loginAdmin
} from "../controllers/adminController.js";

const router = Router();

router.post("/login", loginAdmin);
router.get("/users", listRegisteredUsers);
router.get("/store-owners", listRegisteredStoreOwners);

export default router;
