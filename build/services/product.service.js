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
Object.defineProperty(exports, "__esModule", { value: true });
const Product_model_1 = __importDefault(require("../models/Product.model"));
const HttpError_1 = __importDefault(require("../utils/HttpError"));
const productSchema_1 = __importDefault(require("./schemas/productSchema"));
class ProductService {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield Product_model_1.default.findAll();
            if (!products)
                throw new HttpError_1.default(500, "Internal Error");
            return products;
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield Product_model_1.default.findByPk(id);
            if (!product)
                throw new HttpError_1.default(404, "Produto não encontrado");
            return product;
        });
    }
    insertProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = productSchema_1.default.validate(product);
            if (error)
                throw new HttpError_1.default(404, error.message);
            yield Product_model_1.default.create(Object.assign({}, product));
        });
    }
}
exports.default = ProductService;