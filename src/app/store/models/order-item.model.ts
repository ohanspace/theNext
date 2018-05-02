export interface OrderItem {
    product: {id: string, name: string, imageUrl: string, price: number};
    quantity: number;
    totalPrice: number;
}
