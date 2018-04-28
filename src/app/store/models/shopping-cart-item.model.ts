import { Product } from './product.model';

export class ShoppingCartItem {
    product: Product;
    quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    getUnitPrice() {
        return this.product.price;
    }
    
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
