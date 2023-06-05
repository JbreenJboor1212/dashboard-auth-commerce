import { useContext } from "react";
import Header from "../header/Header";
import "./Cart.css";
import { Data } from "../../page/context/Context";
import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";

const products = [
  {
    id: 1,
    title: "اتش بی الیت بوك الجیل الثانی",
    image: "/images/products/laptops/l1.jpg",
    price: 750,
    rating: 4.5,
    reviews: "900",
    isLaptop: true,
  },
  {
    id: 2,
    title: "لابتوب ایسر نیترو 515-5",
    image: "/images/products/laptops/l2.jpg",
    price: 600,
    rating: 3.5,
    reviews: "250",
    isLaptop: true,
  },
];

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(Data);
  return (
    <>
      <Header />
      <div className="cart">
        <h1>سلة التسوق</h1>
        <div className="cart-cart">
          <OrderSummary />
          <div className="cart-right">
            {cartItems.map((item) => (
              <CartItem
                item={item}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
