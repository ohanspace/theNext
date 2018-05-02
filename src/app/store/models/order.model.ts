import { ShippingAddress } from './shipping-address.model';
import { OrderItem } from './order-item.model';
import { ShoppingCartItem } from './shopping-cart-item.model';

export class Order {
    userId: string;
    dateCreated: number;
    shippingAddress: ShippingAddress;
    items: OrderItem[];

    constructor(userId: string, shippingAddress: ShippingAddress, cartItems: ShoppingCartItem[]) {
        this.userId = userId,
        this.dateCreated = new Date().getTime(),
        this.shippingAddress = shippingAddress,
        this.items =  cartItems.map(item => {
            return {
                product: {
                    id: item.id,
                    name: item.name,
                    imageUrl: item.imageUrl,
                    price: item.price
                },
                quantity: item.quantity,
                totalPrice: item.totalPrice
            };
        });
    }
}
