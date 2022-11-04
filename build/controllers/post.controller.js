"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const post_service_1 = __importDefault(require("../services/post.service"));
const getAllPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_service_1.default.getAllPost();
    res.status(200).json(posts);
});
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = yield post_service_1.default.getPostById(id);
    res.status(200).json(post);
});
const insertPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    yield post_service_1.default.insertPost(post);
    res.status(201).end();
});
const editPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = req.body;
    yield post_service_1.default.editPost(id, post);
    res.status(200).json({ message: "Post editado com sucesso!" });
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield post_service_1.default.deletePost(id);
    res.status(204).end();
});
const getPostByQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q } = req.query;
    const term = q;
    const post = yield post_service_1.default.getPostByQuery(term);
    res.status(200).json(post);
});
module.exports = {
    getAllPost,
    getPostById,
    insertPost,
    editPost,
    deletePost,
    getPostByQuery,
};
