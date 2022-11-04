"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = (0, express_1.Router)();
router
    .route("/")
    .get(user_controller_1.default.getAllUsers)
    .post(user_controller_1.default.insertUser);
router
    .route("/:id")
    .get(user_controller_1.default.getUserById)
    .put(user_controller_1.default.editUser)
    .delete(user_controller_1.default.deleteUser);
exports.default = router;
