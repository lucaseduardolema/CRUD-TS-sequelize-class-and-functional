"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Restaurant extends sequelize_1.Model {
}
Restaurant.init({
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
    category: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    openingTime: {
        allowNull: false,
        type: sequelize_1.TIME,
        field: "opening_time",
    },
    closingTime: {
        allowNull: false,
        type: sequelize_1.TIME,
        field: "closing_time",
    },
}, {
    sequelize: _1.default,
    modelName: "restaurants",
    timestamps: false,
    underscored: true,
});
exports.default = Restaurant;
