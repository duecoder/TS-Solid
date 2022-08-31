/*
Interface segregation principle
Os clientes não devem ser forçados a depender de type, interfaces
ou membros abstratos que não utilizam.
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingcart';
import { FiftyDiscount, NoDiscount, TenDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

const fiftyDiscount = new FiftyDiscount();
// const tenDiscount = new TenDiscount();
// const noDiscount = new NoDiscount();
const cartOne = new ShoppingCart(fiftyDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Eduardo',
//   'Castro',
//   '442.455.198-94',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Raccoon',
  'XX.XXX.XXX/0001-XX',
);
const order = new Order(cartOne, messaging, persistency, enterpriseCustomer);

cartOne.addItem(new Product('Shirt', 49.95));
cartOne.addItem(new Product('Pencil', 9.932));
cartOne.addItem(new Product('Shorts', 89.923));

console.log(cartOne.items);
console.log(cartOne.total());
console.log(cartOne.totalWithDiscount());

order.checkOut();
console.log(order.orderStatus);
