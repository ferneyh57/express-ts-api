export interface BaseProduct {
    name: string;
    price: number;
    description: string;
    image: string;
    quantity:  number;
    active: boolean;
  }
  
  export interface Product extends BaseProduct {
    id: number;
  }
