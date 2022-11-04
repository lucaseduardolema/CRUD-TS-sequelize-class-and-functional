import { Router } from "express";
import postController from "../controllers/post.controller";

const router = Router();

router.get("/search", postController.getPostByQuery);

router
  .route("/")
  .get(postController.getAllPost)
  .post(postController.insertPost);

router
  .route("/:id")
  .get(postController.getPostById)
  .put(postController.editPost)
  .delete(postController.deletePost);

export default router;
