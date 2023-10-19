import { BsFillCartFill,} from "react-icons/bs";
import './main.css';
import { useCart } from './CartContext';
import React, { useState } from 'react';

function Cart() {
  const { cartState, cartDispatch } = useCart();
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const toggleBox = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  const increaseItemCount = item => {
    cartDispatch({ type: 'INCREASE_COUNT', payload: item });
  };

  const decreaseItemCount = item => {
    cartDispatch({ type: 'DECREASE_COUNT', payload: item });
  };

  const removeItem = item => {
    cartDispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const calculateTotal = () => {
    let totalAmount = 0;
    let totalItems = 0;

    cartState.items.forEach(item => {
      totalAmount += item.totalPrice;
      totalItems += item.count;
    });

    return { totalAmount, totalItems };
  };

  const { totalAmount, totalItems } = calculateTotal();

  const handleCheckout = () => {
    const confirmCheckout = window.confirm("Bạn có chắc muốn thanh toán?");
    if (confirmCheckout) {
      cartDispatch({ type: 'CLEAR_CART' });
      setCheckoutSuccess(true);
      alert("Thanh toán thành công!");
    }
  };

  return (
    <div>
      <button className="iconcart" onClick={toggleBox}>
        <BsFillCartFill />
        {cartState.items.length > 0 && (
          <span className="cart-count">{cartState.items.length}</span>
        )}
      </button>
      {isBoxVisible && (
        <div className="box">
          <div className="cart-list">
          {cartState.items.map((item, index) => (
        <div className="add-1" key={index}>
          <img className="img-incart"src={item.image} alt={item.name} /> 
          <div className="name-cart">
          <h10 className="name-in-cart">
            {item.name} 
          </h10><br/>
          <h10 className="name-in-cart-1">Sl:{item.count}</h10>
          </div>
          <div className="but-in-cart">
            <div className="but-in-cart-1">
            <div className="but-cart" onClick={() => increaseItemCount(item)}>+</div>
            <div className="but-cart"  onClick={() => decreaseItemCount(item)}>-</div>
            <div className="but-cart"  onClick={() => removeItem(item)}>X</div>
            </div>
            <div className="but-in-cart-2">
             <p className="price-in-cart">{item.totalPrice}$</p>
             </div>
          </div>
         
        </div>
      ))}

            </div>
            <div className="tongcong">
              <p>Tổng số sản phẩm: {totalItems}</p>
              <p>Tổng số tiền: {totalAmount}$</p>
            </div>
        
            
            <button className="checkout" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
      
      )}
    </div>
  );
}

export default Cart;
