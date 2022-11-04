import { Op } from "sequelize";
import IPost from "../interfaces/post";
import Post from "../models/Post.model";
import HttpError from "../utils/HttpError";
import postSchema from "./schemas/postSchema";

const getAllPost = async () => {
  const posts = await Post.findAll();
  if (!posts) throw new HttpError(500, "Internal Error");
  return posts;
};

const getPostById = async (id: string) => {
  const post = await Post.findByPk(id);
  if (!post) throw new HttpError(404, "Usuário não encontrado");
  return post;
};

const insertPost = async (post: IPost) => {
  const { error } = postSchema.validate(post);
  if (error) throw new HttpError(404, error.message);

  await Post.create({ ...post });
};

const editPost = async (id: string, post: IPost) => {
  const { error } = postSchema.validate(post);
  if (error) throw new HttpError(404, error.message);

  const [row] = await Post.update({ ...post }, { where: { id } });
  if (row === 0) throw new HttpError(500, "Internal Error");
};

const deletePost = async (id: string) => {
  const row = await Post.destroy({ where: { id } });
  if (row === 0) throw new HttpError(500, "Internal Error");
};

const getPostByQuery = async (query: string) => {
  const post = Post.findAll({
    where: {
      [Op.or]: [
        { author: { [Op.like]: `%${query}%` } },
        { category: { [Op.like]: `%${query}%` } },
        { publicationDate: { [Op.substring]: `${query}` } },
      ],
    },
  });

  if (!post) throw new HttpError(500, "Internal Error");

  return post;
};

export = {
  getAllPost,
  getPostById,
  insertPost,
  editPost,
  deletePost,
  getPostByQuery,
};
