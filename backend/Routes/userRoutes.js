import express from "express";
import userController from "../Controller/userController.js";
import { AuthMiddleware } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", userController.registerUser);
router.post("/auth", userController.authUser);
router.post("/logout", userController.logoutUser);
router.get("/profile", AuthMiddleware, userController.getUserProfile);
router.put("/profile", AuthMiddleware, userController.updateUserProfile);
router.post("/logout", userController.logoutUser);

export default router;
