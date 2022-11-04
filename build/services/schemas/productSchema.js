"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const productSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    brand: joi_1.default.string().min(3).required(),
    price: joi_1.default.number().min(1).required(),
    manufacturingDate: joi_1.default.string().isoDate().required(),
    expirationDate: joi_1.default.string().isoDate().required(),
});
exports.default = productSchema;
