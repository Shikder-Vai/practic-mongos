import express from "express";
import {
  createUser,
  getAdminUserFromDB,
  getUserById,
  getUsers,
} from "./user.controller";
const router = express.Router();

// router.get("/", controller);

router.get("/", getUsers);
router.get("/admins", getAdminUserFromDB);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
