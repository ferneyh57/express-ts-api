// T -> objeto completo, S -> objeto base
export interface CrudActions<T,S>{
    create(baseData: S): Promise<T | null>;
    getById(id: number): Promise<T | null>;
    getAll(): Promise<T[]>;
    delete(id: number): Promise<null | void>;
    update(id: number, baseData: S): Promise<T | null>;
}
