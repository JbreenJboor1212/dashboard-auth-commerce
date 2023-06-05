import "./ProductItem.css";
import MobileItem from "./MobileItem";
import LapTopItem from "./LapTopItem";
import { useContext } from "react";
import { Data } from "../../page/context/Context";

const ProductItem = () => {
  const { addToCart } = useContext(Data);
  return (
    <div className="product-item">
      <MobileItem titleT="Our Mobile" addToCart={addToCart} />
      <LapTopItem titleT="Our LapTop" addToCart={addToCart} />
    </div>
  );
};

export default ProductItem;
