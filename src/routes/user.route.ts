import { Router } from "express";
import userController from "../controllers/user.controller";

const router = Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.insertUser);

router
  .route("/:id")
  .get(userController.getUserById)
  .put(userController.editUser)
  .delete(userController.deleteUser);

export default router;
