"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
const router = (0, express_1.Router)();
router.get("/search", post_controller_1.default.getPostByQuery);
router
    .route("/")
    .get(post_controller_1.default.getAllPost)
    .post(post_controller_1.default.insertPost);
router
    .route("/:id")
    .get(post_controller_1.default.getPostById)
    .put(post_controller_1.default.editPost)
    .delete(post_controller_1.default.deletePost);
exports.default = router;
