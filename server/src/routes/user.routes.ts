import { Router } from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

const router = Router();

router.post("/new-user", createUser);
router.get("/users", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
