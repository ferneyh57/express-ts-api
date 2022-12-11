export interface BaseComponent {
    name: ComponentType,
    description?: string
}
export interface Component extends BaseComponent {
    id: number,
}
export enum ComponentType {
    CPU ="CPU",
    GPU ="GPU",
    PSU = "PSU",
    HDD = "HDD",
    SSD = "SSD",
    RAM = "RAM",
    BOARD = "BOARD",
}

