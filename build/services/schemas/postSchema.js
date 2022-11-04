"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const postSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    author: joi_1.default.string().min(3).required(),
    category: joi_1.default.string().min(3).required(),
});
exports.default = postSchema;
