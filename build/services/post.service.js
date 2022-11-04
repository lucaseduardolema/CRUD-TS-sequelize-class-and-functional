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
const sequelize_1 = require("sequelize");
const Post_model_1 = __importDefault(require("../models/Post.model"));
const HttpError_1 = __importDefault(require("../utils/HttpError"));
const postSchema_1 = __importDefault(require("./schemas/postSchema"));
const getAllPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield Post_model_1.default.findAll();
    if (!posts)
        throw new HttpError_1.default(500, "Internal Error");
    return posts;
});
const getPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield Post_model_1.default.findByPk(id);
    if (!post)
        throw new HttpError_1.default(404, "Usuário não encontrado");
    return post;
});
const insertPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = postSchema_1.default.validate(post);
    if (error)
        throw new HttpError_1.default(404, error.message);
    yield Post_model_1.default.create(Object.assign({}, post));
});
const editPost = (id, post) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = postSchema_1.default.validate(post);
    if (error)
        throw new HttpError_1.default(404, error.message);
    const [row] = yield Post_model_1.default.update(Object.assign({}, post), { where: { id } });
    if (row === 0)
        throw new HttpError_1.default(500, "Internal Error");
});
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const row = yield Post_model_1.default.destroy({ where: { id } });
    if (row === 0)
        throw new HttpError_1.default(500, "Internal Error");
});
const getPostByQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const post = Post_model_1.default.findAll({
        where: {
            [sequelize_1.Op.or]: [
                { author: { [sequelize_1.Op.like]: `%${query}%` } },
                { category: { [sequelize_1.Op.like]: `%${query}%` } },
                { publicationDate: { [sequelize_1.Op.substring]: `${query}` } },
            ],
        },
    });
    if (!post)
        throw new HttpError_1.default(500, "Internal Error");
    return post;
});
module.exports = {
    getAllPost,
    getPostById,
    insertPost,
    editPost,
    deletePost,
    getPostByQuery,
};
