"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const handleError_1 = __importDefault(require("./middlewares/handleError"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const post_route_1 = __importDefault(require("./routes/post.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use("/users", user_route_1.default);
app.use("/posts", post_route_1.default);
app.use("/products", product_route_1.default);
app.use(handleError_1.default);
app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`);
});
exports.default = app;
