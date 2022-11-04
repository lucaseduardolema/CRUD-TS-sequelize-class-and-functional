import { DATE, INTEGER, literal, Model, STRING } from "sequelize";
import db from ".";

class Post extends Model {
  declare id: number;
  declare title: string;
  declare author: string;
  declare category: string;
  declare publicationDate: Date;
}

Post.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    title: {
      allowNull: false,
      type: STRING,
    },
    author: {
      allowNull: false,
      type: STRING,
    },
    category: {
      allowNull: false,
      type: STRING,
    },
    publicationDate: {
      allowNull: false,
      type: DATE,
      field: "publication_date",
      defaultValue: literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize: db,
    modelName: "posts",
    timestamps: false,
    underscored: true,
  }
);

export default Post;
