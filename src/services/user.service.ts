import IUser from "../interfaces/user";
import User from "../models/User.model";
import HttpError from "../utils/HttpError";
import userSchema from "./schemas/userSchema";

const getAllUsers = async () => {
  const users = await User.findAll();
  if (!users) throw (new Error().name = "500");
  return users;
};

const getUserById = async (id: string) => {
  const user = await User.findByPk(id);
  if (!user) throw new HttpError(404, "Usuário não encontrado");
  return user;
};

const insertUser = async (user: IUser) => {
  const { error } = userSchema.validate(user);
  if (error) throw new HttpError(404, error.message);

  const { email } = user;
  const hasUserExist = await User.findOne({ where: { email } });
  if (hasUserExist) throw new HttpError(409, "Usuário já cadastrado");

  await User.create({ ...user });
};

const editUser = async (id: string, user: IUser) => {
  const { error } = userSchema.validate(user);
  if (error) throw new HttpError(404, error.message);

  const [row] = await User.update({ ...user }, { where: { id } });
  if (row === 0) throw new HttpError(500, "Internal Error");
};

const deleteUser = async (id: string) => {
  const row = await User.destroy({ where: { id } });
  if (row === 0) throw new HttpError(500, "Internal Error");
};

export = {
  getAllUsers,
  getUserById,
  insertUser,
  editUser,
  deleteUser,
};
