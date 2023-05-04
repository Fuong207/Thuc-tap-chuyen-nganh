import Cart from "../feature/cart";
import HomePage from "../feature/home";
import ProductDetail from "../feature/product-detail";
import { ROUTE } from "./config";

export const APP_ROUTER = [
  {
    path: ROUTE.HOME,
    element: HomePage,
  },
  {
    path: ROUTE.CART,
    element: Cart,
  },
  {
    path: ROUTE.DETAIL,
    element: ProductDetail,
  },
];
