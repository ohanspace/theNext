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
        for (const productId of Object.keys(this.itemsMap)) {
            const item = this.itemsMap[productId];
            const itemObj = new ShoppingCartItem({
                id: productId,
                ...item
            });
            this.items.push(itemObj);
        }
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
