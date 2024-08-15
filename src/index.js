import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

const item1 = await createItem("Trakinas", 8.9, 1);
const item2 = await createItem("Suco Laranja", 10.0, 3);

console.log(`==========`);
console.log("Welcome to your Shopee Cart!");

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
// await cartService.deleteItem(myCart, item2.name);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);
