import { Request, Response } from "express";
import { BaseProduct, Product } from "../interface/product.interface";
import { productMockRepository } from "../service/product.service"

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products: Product[] = await productMockRepository.getAll();

        res.status(200).send(products);
    } catch (e) {
        res.status(500).send(e);
    }
}

export const getProductById = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const findProduct: Product | null = await productMockRepository.getById(id);

        if (findProduct != null) {
            return res.status(200).send(findProduct);
        }

        res.status(404).send("Product not found");
    } catch (e) {
        res.status(500).send(e);
    }
}

export const addProduct = async (req: Request, res: Response) => {
    try {
        const product: BaseProduct = req.body;

        const newProduct = await productMockRepository.create(product);

        res.status(201).json(newProduct);
    } catch (e) {
        res.status(500).send(e);
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const newProductData: Product = req.body;

        const findProduct: Product | null = await productMockRepository.getById(id);

        if (findProduct != null) {
            const updatedProduct = await productMockRepository.update(id, newProductData);
            return res.status(200).json(updatedProduct);
        }

        const newProduct = await productMockRepository.create(newProductData);

        res.status(201).json(newProduct);
    } catch (e) {
        res.status(500).send(e);
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const productId: number = parseInt(req.params.id, 10);
        await productMockRepository.delete(productId);

        res.sendStatus(204);
    } catch (e) {
        res.status(500).send(e);
    }
}