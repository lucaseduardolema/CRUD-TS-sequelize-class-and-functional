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
const User_model_1 = __importDefault(require("../models/User.model"));
const HttpError_1 = __importDefault(require("../utils/HttpError"));
const userSchema_1 = __importDefault(require("./schemas/userSchema"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_model_1.default.findAll();
    if (!users)
        throw (new Error().name = "500");
    return users;
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_model_1.default.findByPk(id);
    if (!user)
        throw new HttpError_1.default(404, "Usuário não encontrado");
    return user;
});
const insertUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = userSchema_1.default.validate(user);
    if (error)
        throw new HttpError_1.default(404, error.message);
    const { email } = user;
    const hasUserExist = yield User_model_1.default.findOne({ where: { email } });
    if (hasUserExist)
        throw new HttpError_1.default(409, "Usuário já cadastrado");
    yield User_model_1.default.create(Object.assign({}, user));
});
const editUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = userSchema_1.default.validate(user);
    if (error)
        throw new HttpError_1.default(404, error.message);
    const [row] = yield User_model_1.default.update(Object.assign({}, user), { where: { id } });
    if (row === 0)
        throw new HttpError_1.default(500, "Internal Error");
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const row = yield User_model_1.default.destroy({ where: { id } });
    if (row === 0)
        throw new HttpError_1.default(500, "Internal Error");
});
module.exports = {
    getAllUsers,
    getUserById,
    insertUser,
    editUser,
    deleteUser,
};
