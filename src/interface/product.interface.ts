export interface BaseProduct {
    name: string;
    price: number;
    description: string;
    image: string;
    quantity:  number;
    active: boolean;
    componentId:number,
  }
  
  export interface Product extends BaseProduct {
    id: number;
  }
