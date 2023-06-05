const CartItem = ({ item, addToCart, removeFromCart }) => {
  const { id, title, price, image, quantity } = item;
  return (
    <div className="cart-right-left-left">
      <div className="left-left">
        <h3>{title}</h3>
        <div className="div-one">
          <span>{quantity}</span>: الكمية
        </div>
        <div className="div-two">
          <span>${(price * quantity).toFixed(2)}</span> : السعر
        </div>
      </div>
      <div className="img">
        <img src={image} alt={id} />
      </div>
      <span
        className="span-icon"
        onClick={() => {
          removeFromCart(id);
        }}
      >
        <i className="bi bi-trash3"></i>
      </span>
    </div>
  );
};

export default CartItem;
