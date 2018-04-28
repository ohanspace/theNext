import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {
    id?: string;

    constructor(public dateCreated, 
                public itemsMap?: { [key: string]: ShoppingCartItem }) {

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
        if (!this.itemsMap) return [];
        const itemsArray = [];
        for (const id of Object.keys(this.itemsMap)) {
            itemsArray.push(this.itemsMap[id]);
        }
        return itemsArray;
    }
}
