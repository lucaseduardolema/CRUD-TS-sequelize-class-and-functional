import { DATE, INTEGER, Model, STRING } from "sequelize";
import db from ".";

class Product extends Model {
  declare id: number;
  declare name: string;
  declare brand: string;
  declare price: number;
  declare manufacturingDate: Date;
  declare expirationDate: Date;
}

Product.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      allowNull: false,
      type: STRING,
    },
    brand: {
      allowNull: false,
      type: STRING,
    },
    price: {
      allowNull: false,
      type: INTEGER,
    },
    manufacturingDate: {
      allowNull: false,
      type: DATE,
      field: "manufacturing_date",
    },
    expirationDate: {
      allowNull: false,
      type: DATE,
      field: "expiration_date",
    },
  },
  {
    sequelize: db,
    modelName: "products",
    timestamps: false,
    underscored: true,
  }
);

export default Product;
