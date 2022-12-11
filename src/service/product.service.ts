/**
 * Data Model Interfaces
 */

import { BaseProduct, Product } from "../interface/product.interface";
import { CrudActions } from "../utils/crud.interface";
;


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
        active: true,
        componentId: 1,
    },
    {
        id: 2,
        name: "Intel 13900K",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
        quantity: 10,
        active: true,
        componentId: 1,
    },
    {
        id: 3,
        name: "Rx 6600XT",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
        quantity: 10,
        active: true,
        componentId: 2,
    }
];
export interface ProductRepository extends CrudActions<Product,BaseProduct>{

}


export const productMockRepository: ProductRepository = {
    create: async function (baseProductData: BaseProduct): Promise<Product | null> {
        const id = new Date().valueOf();
        const newProduct: Product = { id, ...baseProductData }
        mockProducts = [...mockProducts, newProduct]
        return newProduct
    },

    getById: async function (id: number): Promise<Product | null> {
        const findProduct = mockProducts.find(e => e.id == id)
        if (!findProduct) {
            return null
        }
        return findProduct;
    },

    getAll: async function (): Promise<Product[]> {
        return mockProducts;
    },

    delete: async function (id: number): Promise<void | null> {
        const findProduct = mockProducts.find(e => e.id == id)

        if (!findProduct) {
            return null;
        }

        mockProducts = mockProducts.filter(e => e.id != id)
    },
    update: async function (id: number, productData: Product): Promise<Product | null> {
        const findProduct = mockProducts.find(e => e.id == id)

        if (!findProduct) {
            return null;
        }
        let updatedProduct :Product = productData
        updatedProduct.id = id

        mockProducts.forEach((element, index) => {
            mockProducts[index] = element.id == id ? updatedProduct : element
        });
        return updatedProduct;
    }
}
