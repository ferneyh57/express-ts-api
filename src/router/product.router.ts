import express from "express";
import * as controller from "../controller/product.controller";

export const productsRouter = express.Router();

productsRouter
    .get("/", controller.getAllProducts)
    .get("/:id", controller.getProductById)
    .post("/", controller.addProduct)
    .put("/:id", controller.updateProduct)
    .delete("/:id", controller.deleteProduct);
