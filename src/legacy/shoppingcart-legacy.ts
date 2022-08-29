type CartItem = { name: string; price: number };

type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkOut(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty.');
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Your order of R$${this.total()} has been placed successfully!`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Received:', msg);
  }

  saveOrder(): void {
    console.log('Order saved successfully!');
  }

  clear(): void {
    console.log('Your shopping cart was cleared!');
    this._items.length = 0;
  }
}

const cartOne = new ShoppingCartLegacy();
cartOne.addItem({ name: 'Shirt', price: 49.95 });
cartOne.addItem({ name: 'Pencil', price: 9.932 });
cartOne.addItem({ name: 'Shorts', price: 89.923 });

// cartOne.clear();

console.log(cartOne.items);
console.log(cartOne.total());
cartOne.checkOut();
console.log(cartOne.orderStatus);
