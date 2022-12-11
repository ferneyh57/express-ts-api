import { Request, Response } from "express";
import { Component } from "../interface/component.interface";
import { componentMockRepository } from "../service/component.service";

export const getAllComponents = async (req: Request, res: Response) => {
    try {
        const components: Component[] = await componentMockRepository.getAll();

        return res.status(200).send(components);
    } catch (e) {
        return res.status(500).send(e);
    }
};

export const getComponentById = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        const component = await componentMockRepository.getById(id);
        if (component != null) {
            return res.status(200).send(component);
        }
        return res.status(404).send('Component not found!')
    }
    catch (e) {
        return res.status(500).send(e);
    }


}
export const createComponent = async (req: Request, res: Response) => {
    try {
        const BaseComponent: Component = req.body;
        const newComponent = await componentMockRepository.create(BaseComponent)
        if (newComponent != null) {
            return res.status(200).send(newComponent);
        }
        return res.status(401).send('Wrong component data!')
    }
    catch (e) {
        return res.status(500).send(e);
    }

};

export const updateComponent = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        const componentNewData: Component = req.body;
        const foundComponent = await componentMockRepository.update(id, componentNewData)
        if (foundComponent != null) return res.status(200).json(foundComponent);
    } catch (e) {
        return res.status(500).send(e);
    }


}
export const deleteComponent = async (req: Request, res: Response) => {
    try {
        const productId: number = parseInt(req.params.id, 10);
        await componentMockRepository.delete(productId);

        return res.sendStatus(204);
    } catch (e) {
        return res.status(500).send(e);
    }
}