import { Router } from "express";
import multer from "multer";
import {
    createStoreEntry,
    deleteStoreEntry,
    listStoresForOwner,
    updateStoreEntry
} from "../controllers/storeController.js";

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

router.post("/", upload.single("image"), createStoreEntry);
router.get("/owner/:ownerId", listStoresForOwner);
router.put("/:storeId", upload.single("image"), updateStoreEntry);
router.delete("/:storeId", deleteStoreEntry);

export default router;
