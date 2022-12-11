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
export interface ProductRepository {
    createProduct(baseProductData: BaseProduct): Promise<Product | null>;
    getProductById(id: number): Promise<Product | null>;
    getAllproducts(): Promise<Product[]>;
    deleteProduct(id: number): Promise<null | void>;
    updateProduct(id: number, productData: BaseProduct): Promise<Product | null>;
}


export const productMockRepository: ProductRepository = {
    createProduct: async function (baseProductData: BaseProduct): Promise<Product | null> {
        const id = new Date().valueOf();
        const newProduct: Product = { id, ...baseProductData }
        mockProducts = [...mockProducts, newProduct]
        return newProduct
    },

    getProductById: async function (id: number): Promise<Product | null> {
        const findProduct = mockProducts.find(e => e.id == id)
        if (!findProduct) {
            return null
        }
        return findProduct;
    },

    getAllproducts: async function (): Promise<Product[]> {
        return mockProducts;
    },

    deleteProduct: async function (id: number): Promise<void | null> {
        const findProduct = mockProducts.find(e => e.id == id)

        if (!findProduct) {
            return null;
        }

        mockProducts = mockProducts.filter(e => e.id != id)
    },
    updateProduct: async function (id: number, productData: BaseProduct): Promise<Product | null> {
        const findProduct = mockProducts.find(e => e.id == id)

        if (!findProduct) {
            return null;
        }
        const updatedProduct = { id, ...productData }

        mockProducts.forEach((element, index) => {
            mockProducts[index] = element.id == id ? updatedProduct : element
        });
        return updatedProduct;
    }
}
