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
const user_service_1 = __importDefault(require("../services/user.service"));
const getAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.default.getAllUsers();
    res.status(200).json(users);
});
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_service_1.default.getUserById(id);
    res.status(200).json(user);
});
const insertUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    yield user_service_1.default.insertUser(newUser);
    res.status(201).end();
});
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.body;
    yield user_service_1.default.editUser(id, user);
    res.status(200).json({ message: "Usuário editado com sucesso" });
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield user_service_1.default.deleteUser(id);
    res.status(204).end();
});
module.exports = {
    getAllUsers,
    getUserById,
    insertUser,
    editUser,
    deleteUser,
};
