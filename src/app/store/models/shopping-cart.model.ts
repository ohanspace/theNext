import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {
    id?: string;

    constructor(public dateCreated, 
                public items?: ShoppingCartItem[]) {

    }

    get totalItemsQuantity() {
        let totalQuantity = 0;
        if (!this.items) return totalQuantity;

        for (const productId of Object.keys(this.items)) {
          totalQuantity += this.items[productId].quantity;
        } 
        return totalQuantity;
    }
}
