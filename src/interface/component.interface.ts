export interface BaseComponent {
    name: ComponentType,
    description?: string
}
export interface Component extends BaseComponent {
    id: number,
}
export enum ComponentType {
    CPU,
    GPU,
    PSU,
    HDD,
    SSD,
    RAM,
    BOARD,
}