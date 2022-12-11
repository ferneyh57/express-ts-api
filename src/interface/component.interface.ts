export interface Component{
    id: number,
    name : ComponentType,
    description?: string
}

export enum ComponentType{
    CPU,
    GPU,
    PSU,
    HDD,
    SSD,
    RAM,
}