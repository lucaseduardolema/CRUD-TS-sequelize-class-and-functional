import { INTEGER, Model, STRING, TIME } from "sequelize";
import db from ".";

class Restaurant extends Model {
  declare id: number;
  declare name: string;
  declare category: string;
  declare openingTime: string;
  declare closingTime: string;
}

Restaurant.init(
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
    category: {
      allowNull: false,
      type: STRING,
    },
    openingTime: {
      allowNull: false,
      type: TIME,
      field: "opening_time",
    },
    closingTime: {
      allowNull: false,
      type: TIME,
      field: "closing_time",
    },
  },
  {
    sequelize: db,
    modelName: "restaurants",
    timestamps: false,
    underscored: true,
  }
);

export default Restaurant;
