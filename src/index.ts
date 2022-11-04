import "express-async-errors";
import "dotenv/config";
import express from "express";
import handleError from "./middlewares/handleError";
import userRouter from "./routes/user.route";
import postRouter from "./routes/post.route";
import productRouter from "./routes/product.route";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/products", productRouter);

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});

export default app;
