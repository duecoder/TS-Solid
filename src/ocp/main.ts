import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shoppingcart';

const cartOne = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cartOne, messaging, persistency);

cartOne.addItem(new Product('Shirt', 49.95));
cartOne.addItem(new Product('Pencil', 9.932));
cartOne.addItem(new Product('Shorts', 89.923));

console.log(cartOne.items);
console.log(cartOne.total());
order.checkOut();
console.log(order.orderStatus);
