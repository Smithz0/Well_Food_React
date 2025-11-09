import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
function Cart() {
  const { food_list, cartItem, removeFromCart } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                {" "}
                <div className="cart-items-title  cart-items-item" >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${(item.price * cartItem[item._id]).toFixed(2)}</p>
                  <button className="cross" onClick={() => removeFromCart(item._id)}>X</button>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{0}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery</p>
            <p>{2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>{0}</b>
          </div>
         
        </div> 
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have promocode ,Enter it here</p>
          <div className="cart-promocode-imput">
            <input type="text" placeholder="promo code"/>
            <button>Sumbit</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Cart;
