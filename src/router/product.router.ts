/**
 * Required External Modules and Interfaces
 */

import express from "express";
import * as controller from "../controller/product.controller";

/**
* Router Definition
*/

export const productsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET products

productsRouter.get("/", controller.getAllProducts);

// GET products/:id

productsRouter.get("/:id", controller.getProductById);

// POST products

productsRouter.post("/", controller.addProduct);

// PUT products/:id

productsRouter.put("/:id", controller.updateProduct);

// DELETE products/:id

productsRouter.delete("/:id", controller.deleteProduct);