import { useContext } from "react";
import { Data } from "../../page/context/Context";

const OrderSummary = () => {
  const { cartItems } = useContext(Data);

  const totalPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-left">
      <p className="cart-pone">
        طلبك جاهز للشحن مؤهل للشحن مجاني واضغط ل اكمال العملية
        <span>
          <i className="bi bi-check-circle-fill"></i>
        </span>
      </p>
      <p className="cart-ptwo">
        <span>{totalPrice}</span> : المجموع
      </p>
      <button className="cart-btn">تابع عملية الشراء</button>
    </div>
  );
};

export default OrderSummary;
