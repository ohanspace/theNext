import { ShoppingCartItem } from './shopping-cart-item.model';
import { Product } from './product.model';

export class ShoppingCart {
    id?: string;
    items: ShoppingCartItem[] = [];
    itemsMap = {} as { [key: string]: ShoppingCartItem };

    constructor(public dateCreated, 
                itemsMap ) {
        if (!itemsMap) return;
        this.itemsMap = itemsMap;
        for (const id of Object.keys(itemsMap)) {
            const item = itemsMap[id];
            const itemObj = new ShoppingCartItem(item.product, item.quantity);
            this.items.push(itemObj);
        }
    }

    getItem(productId: string): ShoppingCartItem {
        const item = this.itemsMap[productId];
        return item ? item : null;
    }

    getQtyOfProduct(product: Product) {
        const item = this.itemsMap[product.id];
        return item ? item.quantity : 0;
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
