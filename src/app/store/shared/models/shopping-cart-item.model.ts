import { Product } from './product.model';

export class ShoppingCartItem {
    id?: string;
    product: Product;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;

    constructor(params: Partial<ShoppingCartItem>) {
        Object.assign(this, params);
    }

    getUnitPrice() {
        return this.price;
    }
    
    get totalPrice() {
        return this.price * this.quantity;
    }
}
