"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const router = (0, express_1.Router)();
const productController = new product_controller_1.default();
// solução 1 - Mudar o método para ser do tipo arrow function no arquivo do controller
// userRouter.get('/', usersController.getAll);
// solução 2 - Método
// userRouter.get('/', usersController.getAll.bind(usersController));
// solução 3- Manter como Método e abrir um middleware e chamar como uma funcão!
router
    .route("/")
    .get((req, res) => productController.getAllProducts(req, res))
    .post((req, res) => productController.insertProduct(req, res));
router
    .route("/:id")
    .get((req, res) => productController.getProductById(req, res));
exports.default = router;
