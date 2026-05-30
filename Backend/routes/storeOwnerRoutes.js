import { Router } from "express";
import { loginStoreOwner, registerStoreOwner } from "../controllers/storeOwnerController.js";

const router = Router();

router.post("/register", registerStoreOwner);
router.post("/login", loginStoreOwner);

export default router;
