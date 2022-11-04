import { Request, Response } from "express";
import IPost from "../interfaces/post";
import postService from "../services/post.service";

const getAllPost = async (req: Request, res: Response) => {
  const posts: IPost[] = await postService.getAllPost();
  res.status(200).json(posts);
};

const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post: IPost = await postService.getPostById(id);
  res.status(200).json(post);
};

const insertPost = async (req: Request, res: Response) => {
  const post = req.body;
  await postService.insertPost(post);
  res.status(201).end();
};

const editPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = req.body;
  await postService.editPost(id, post);
  res.status(200).json({ message: "Post editado com sucesso!" });
};

const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  await postService.deletePost(id);
  res.status(204).end();
};

const getPostByQuery = async (req: Request, res: Response) => {
  const { q } = req.query;
  const term: string = q as unknown as string;
  const post = await postService.getPostByQuery(term);
  res.status(200).json(post);
};

export = {
  getAllPost,
  getPostById,
  insertPost,
  editPost,
  deletePost,
  getPostByQuery,
};
