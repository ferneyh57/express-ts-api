import express from "express";
import * as controller from "../controller/component.controller";

export const componentsRouter = express.Router();

componentsRouter
    .get("/", controller.getAllComponents)
    .get("/:id", controller.getComponentById)
    .post("/", controller.createComponent)
    .put("/:id", controller.updateComponent)
    .delete("/:id", controller.deleteComponent);
