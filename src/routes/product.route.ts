import { Router } from "express";
import ProductController from "../controllers/product.controller";

const router = Router();

const productController = new ProductController();

// solução 1 - Mudar o método para ser do tipo arrow function no arquivo do controller
// userRouter.get('/', usersController.getAll);
// solução 2 - Método
// userRouter.get('/', usersController.getAll.bind(usersController));
// solução 3- Manter como Método e abrir um middleware e chamar como uma funcão!

router.get("/search", (req, res) =>
  productController.getProductsPriceBetwen(req, res)
);

router.get("/in-validity", (req, res) =>
  productController.nonExpirateProducts(req, res)
);

router
  .route("/")
  .get((req, res) => productController.getAllProducts(req, res))
  .post((req, res) => productController.insertProduct(req, res));

router
  .route("/:id")
  .get((req, res) => productController.getProductById(req, res))
  .put((req, res) => productController.updateProduct(req, res))
  .delete((req, res) => productController.deleteProduct(req, res));

export default router;
