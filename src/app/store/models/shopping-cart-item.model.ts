import { Product } from './product.model';

export class ShoppingCartItem {
    id?: string;
    product: Product;
    quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    setId(productId: string) {
        this.id = productId;
    }

    getUnitPrice() {
        return this.product.price;
    }
    
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
