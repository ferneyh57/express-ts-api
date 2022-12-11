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
        const newComponent: Component = { id, ...baseProductData }
        mockComponents = [...mockComponents, newComponent]
        return newComponent
    },

    getById: async function (id: number): Promise<Component | null> {
        const findComponent = mockComponents.find(e => e.id == id)
        if (!findComponent) {
            return null
        }
        return findComponent;
    },

    getAll: async function (): Promise<Component[]> {
        return mockComponents;
    },

    delete: async function (id: number): Promise<void | null> {
        const findComponent = mockComponents.find(e => e.id == id)

        if (!findComponent) {
            return null;
        }

        mockComponents = mockComponents.filter(e => e.id != id)
    },
    update: async function (id: number, productData: Component): Promise<Component | null> {
        const findComponent = mockComponents.find(e => e.id == id)

        if (!findComponent) {
            return null;
        }
        let updatedComponent = productData ;
        updatedComponent.id = id

        mockComponents.forEach((element, index) => {
            mockComponents[index] = element.id == id ? updatedComponent : element
        });
        return updatedComponent;
    }
}