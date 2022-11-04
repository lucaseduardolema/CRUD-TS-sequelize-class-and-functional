import { Op } from "sequelize";
import IProduct from "../interfaces/products";
import Product from "../models/Product.model";
import HttpError from "../utils/HttpError";
import productSchema from "./schemas/productSchema";

export default class ProductService {
  async getAllProducts(): Promise<IProduct[]> {
    const products = await Product.findAll();
    if (!products) throw new HttpError(500, "Internal Error");
    return products;
  }

  async getProductById(id: string): Promise<IProduct> {
    const product = await Product.findByPk(id);
    if (!product) throw new HttpError(404, "Produto não encontrado");
    return product;
  }

  async insertProduct(product: IProduct) {
    const { error } = productSchema.validate(product);
    if (error) throw new HttpError(404, error.message);

    await Product.create({ ...product });
  }

  async updateProduct(id: string, product: IProduct) {
    const { error } = productSchema.validate(product);
    if (error) throw new HttpError(404, error.message);

    await this.getProductById(id);

    const [row] = await Product.update({ ...product }, { where: { id } });
    if (row === 0) throw new HttpError(500, "Internal Error");
  }

  async deleteProduct(id: string) {
    await this.getProductById(id);

    const row = await Product.destroy({ where: { id } });
    if (row === 0) throw new HttpError(500, "Internal Error");
  }

  async getProductsPriceBetwen(from: number, to: number): Promise<IProduct[]> {
    const products = await Product.findAll({
      where: { price: { [Op.between]: [from, to] } },
    });

    return products;
  }

  async nonExpirateProducts(date: string): Promise<IProduct[]> {
    const products = await Product.findAll({
      where: { expirationDate: { [Op.gt]: date } },
    });

    return products;
  }
}
