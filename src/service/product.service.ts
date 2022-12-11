/**
 * Data Model Interfaces
 */

import { BaseProduct, Product } from "../interface/product.interface";


/**
 * In-Memory Store
 */

let mockProducts: Product[] = [
    {
        id: 1,
        name: "Ryzen 5600",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
        quantity: 10,
        active: true
    },
    {
        id: 2,
        name: "Intel 13900K",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
        quantity: 10,
        active: true
    },
    {
        id: 3,
        name: "Rx 6600XT",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
        quantity: 10,
        active: true
    }
];

/**
 * Service Methods
 */
export const findAll = async (): Promise<Product[]> => mockProducts;

export const find = async (id: number): Promise<Product | null> => {
    const findProduct = mockProducts.find(e => e.id == id)
    if (!findProduct) {
        return null
    }
    return findProduct;
};

export const create = async (baseProduct: BaseProduct): Promise<Product> => {
    const id = new Date().valueOf();
    const newProduct = { id, ...baseProduct }
    mockProducts = [...mockProducts, newProduct]

    return newProduct;
};

export const update = async (
    id: number,
    productUpdate: BaseProduct
): Promise<Product | null> => {
    const findProduct = await find(id);

    if (!findProduct) {
        return null;
    }
    const updatedProduct = { id, ...productUpdate }

    mockProducts.forEach((element, index) => {
        mockProducts[index] = element.id == id ? updatedProduct : element
    });
    return updatedProduct;
};

export const remove = async (id: number): Promise<null | void> => {
    const findProduct = await find(id);

    if (!findProduct) {
        return null;
    }

    mockProducts = mockProducts.filter(e => e.id != id)
};