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
const product_service_1 = __importDefault(require("../services/product.service"));
class ProductController {
    constructor() {
        this.productService = new product_service_1.default();
    }
    getAllProducts(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productService.getAllProducts();
            res.status(200).json(products);
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const product = yield this.productService.getProductById(id);
            res.status(200).json(product);
        });
    }
    insertProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = req.body;
            yield this.productService.insertProduct(product);
            res.status(201).end();
        });
    }
}
exports.default = ProductController;
