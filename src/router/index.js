import Cart from "../feature/cart";
import HomePage from "../feature/home";

export const APP_ROUTER = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/cart",
    element: Cart,
  },
];
