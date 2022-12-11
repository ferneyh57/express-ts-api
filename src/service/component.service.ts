import { BaseComponent, Component, ComponentType } from "../interface/component.interface";
import { CrudActions } from "../utils/crud.interface";

let mockComponents: Component[] = [
    {
        id: 1,
        name: ComponentType.CPU
    },   
    {
        id: 2,
        name: ComponentType.GPU
    },
    
]

export interface ComponentRepository extends CrudActions<Component, BaseComponent> {

}

export const componentMockRepository: CrudActions<Component, BaseComponent> = {
    create: async function (baseProductData: BaseComponent): Promise<Component | null> {
        const id = new Date().valueOf();
        const newProduct: Component = { id, ...baseProductData }
        mockComponents = [...mockComponents, newProduct]
        return newProduct
    },

    getById: async function (id: number): Promise<Component | null> {
        const findProduct = mockComponents.find(e => e.id == id)
        if (!findProduct) {
            return null
        }
        return findProduct;
    },

    getAll: async function (): Promise<Component[]> {
        return mockComponents;
    },

    delete: async function (id: number): Promise<void | null> {
        const findProduct = mockComponents.find(e => e.id == id)

        if (!findProduct) {
            return null;
        }

        mockComponents = mockComponents.filter(e => e.id != id)
    },
    update: async function (id: number, productData: BaseComponent): Promise<Component | null> {
        const findProduct = mockComponents.find(e => e.id == id)

        if (!findProduct) {
            return null;
        }
        const updatedProduct = { id, ...productData }

        mockComponents.forEach((element, index) => {
            mockComponents[index] = element.id == id ? updatedProduct : element
        });
        return updatedProduct;
    }
}