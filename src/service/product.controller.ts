/**
 * Data Model Interfaces
 */

import { BaseProduct, Product, ProductsList } from "../interface/product.interface";


/**
 * In-Memory Store
 */

let mockProducts: ProductsList = {
    1: {
        id: 1,
        name: "Burger",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
        quantity: 10,
        active: true
    },
    2: {
        id: 2,
        name: "Pizza",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
        quantity: 10,
        active: true
    },
    3: {
        id: 3,
        name: "Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
        quantity: 10,
        active: true
    }
};

/**
 * Service Methods
 */
export const findAll = async (): Promise<Product[]> => Object.values(mockProducts);

export const find = async (id: number): Promise<Product> => mockProducts[id];

export const create = async (newItem: BaseProduct): Promise<Product> => {
    const id = new Date().valueOf();

    mockProducts[id] = {
        id,
        ...newItem,
    };

    return mockProducts[id];
};

export const update = async (
    id: number,
    productUpdate: BaseProduct
): Promise<Product | null> => {
    const findProduct = await find(id);

    if (!findProduct) {
        return null;
    }

    mockProducts[id] = { id, ...productUpdate };

    return mockProducts[id];
};

export const remove = async (id: number): Promise<null | void> => {
    const findProduct = await find(id);

    if (!findProduct) {
        return null;
    }

    delete mockProducts[id];
};