import { Request, Response } from "express";
import IUser from "../interfaces/user";
import userService from "../services/user.service";

const getAllUsers = async (_req: Request, res: Response) => {
  const users: IUser[] = await userService.getAllUsers();
  res.status(200).json(users);
};

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: IUser = await userService.getUserById(id);
  res.status(200).json(user);
};

const insertUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  await userService.insertUser(newUser);
  res.status(201).end();
};

const editUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.body;
  await userService.editUser(id, user);
  res.status(200).json({ message: "Usuário editado com sucesso" });
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  res.status(204).end();
};

export = {
  getAllUsers,
  getUserById,
  insertUser,
  editUser,
  deleteUser,
};
