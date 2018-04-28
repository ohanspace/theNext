import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {
    id?: string;
    items: ShoppingCartItem[] = [];

    constructor(public dateCreated, 
                public itemsMap:  ShoppingCartItem[] ) {
        for (const id of Object.keys(itemsMap)) {
            const item = itemsMap[id];
            const itemObj = new ShoppingCartItem(item.product, item.quantity);
            this.items.push(itemObj);
        }
    }

    getItem(productId: string): ShoppingCartItem {
        return this.itemsMap[productId];
    }

    get totalItemsQuantity(): number {
        let totalQuantity = 0;
        if (!this.itemsMap) return totalQuantity;

        for (const productId of Object.keys(this.itemsMap)) {
          totalQuantity += this.itemsMap[productId].quantity;
        } 
        return totalQuantity;
    }

    get itemsArray(): ShoppingCartItem[] {
        return this.items;
    }

    get totalPrice(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.getTotalPrice();
        }
        return total;
    }
}
