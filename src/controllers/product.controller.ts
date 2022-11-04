import { Request, Response } from "express";
import ProductService from "../services/product.service";

export default class ProductController {
  productService = new ProductService();

  async getAllProducts(_req: Request, res: Response) {
    const products = await this.productService.getAllProducts();
    res.status(200).json(products);
  }

  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    const product = await this.productService.getProductById(id);
    res.status(200).json(product);
  }

  async insertProduct(req: Request, res: Response) {
    const product = req.body;
    await this.productService.insertProduct(product);
    res.status(201).end();
  }

  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const product = req.body;
    await this.productService.updateProduct(id, product);
    res.status(200).json({ message: "Produto editado com sucesso" });
  }

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    await this.productService.deleteProduct(id);
    res.status(204).end();
  }

  async getProductsPriceBetwen(req: Request, res: Response) {
    const { from, to } = req.query;
    const products = await this.productService.getProductsPriceBetwen(
      Number(from),
      Number(to)
    );
    res.status(200).json(products);
  }

  async nonExpirateProducts(req: Request, res: Response) {
    const today = new Date().toISOString();
    const products = await this.productService.nonExpirateProducts(today);
    res.status(200).json(products);
  }
}
