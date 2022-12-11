import { Request, Response } from "express";
import { BaseProduct, Product } from "../interface/product.interface";
import * as ProductService from "../service/product.service"

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products: Product[] = await ProductService.findAll();

        res.status(200).send(products);
    } catch (e) {
        res.status(500).send(e);
    }
}

export const getProductById = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const findProduct: Product = await ProductService.find(id);

        if (findProduct) {
            return res.status(200).send(findProduct);
        }

        res.status(404).send("Product not found");
    } catch (e) {
        res.status(500).send(e);
    }
}

export const addProduct =  async (req: Request, res: Response) => {
    try {
        const product: BaseProduct = req.body;

        const newProduct = await ProductService.create(product);

        res.status(201).json(newProduct);
    } catch (e) {
        res.status(500).send(e);
    }
}

export const updateProduct =  async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const newProductData: Product = req.body;

        const findProduct: Product = await ProductService.find(id);

        if (findProduct) {
            const updatedProduct = await ProductService.update(id, newProductData);
            return res.status(200).json(updatedProduct);
        }

        const newProduct = await ProductService.create(newProductData);

        res.status(201).json(newProduct);
    } catch (e) {
        res.status(500).send(e);
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const productId: number = parseInt(req.params.id, 10);
        await ProductService.remove(productId);

        res.sendStatus(204);
    } catch (e) {
        res.status(500).send(e);
    }
}