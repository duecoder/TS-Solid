/*
Open/Closed principle: OCP
Entidades devem estar abertas para extensão, mas fechadas
para modificação.
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingcart';
import { FiftyDiscount, NoDiscount, TenDiscount } from './classes/discount';

const fiftyDiscount = new FiftyDiscount();
const tenDiscount = new TenDiscount();
const noDiscount = new NoDiscount();
const cartOne = new ShoppingCart(fiftyDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cartOne, messaging, persistency);

cartOne.addItem(new Product('Shirt', 49.95));
cartOne.addItem(new Product('Pencil', 9.932));
cartOne.addItem(new Product('Shorts', 89.923));

console.log(cartOne.items);
console.log(cartOne.total());
console.log(cartOne.totalWithDiscount());

order.checkOut();
console.log(order.orderStatus);
