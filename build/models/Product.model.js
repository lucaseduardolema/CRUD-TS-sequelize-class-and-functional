"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    brand: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    price: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    manufacturingDate: {
        allowNull: false,
        type: sequelize_1.DATE,
        field: "manufacturing_date",
    },
    expirationDate: {
        allowNull: false,
        type: sequelize_1.DATE,
        field: "expiration_date",
    },
}, {
    sequelize: _1.default,
    modelName: "products",
    timestamps: false,
    underscored: true,
});
exports.default = Product;
