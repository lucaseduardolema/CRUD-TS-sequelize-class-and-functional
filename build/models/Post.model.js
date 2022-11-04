"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Post extends sequelize_1.Model {
}
Post.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    title: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    author: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    category: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    publicationDate: {
        allowNull: false,
        type: sequelize_1.DATE,
        field: "publication_date",
        defaultValue: (0, sequelize_1.literal)("CURRENT_TIMESTAMP"),
    },
}, {
    sequelize: _1.default,
    modelName: "posts",
    timestamps: false,
    underscored: true,
});
exports.default = Post;
