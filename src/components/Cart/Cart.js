import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [ischeckout, setischeckout] = useState(false);
  const [issubmitting, setissubmitting] = useState(false);
  const [submitted, setsubmitted] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    const cartitem = {...item , amount:1}
    cartCtx.addItem(cartitem);
  };

  const checkoutorderhandler = () => {
    setischeckout(true);
  };

  const submitOrderhandler = async (userdata) => {
    setissubmitting(true);
    await fetch(
      "https://react-http-1f8b2-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userdata,
          ordereditems: cartCtx.items,
        }),
      }
    );
    setissubmitting(false);
    setsubmitted(true);
    cartCtx.clearcart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalactions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={checkoutorderhandler}>
          Order
        </button>
      )}
    </div>
  );

  const modalcontent = <React.Fragment> {cartItems}
  <div className={classes.total}>
    <span>Total Amount</span>
    <span>{totalAmount}</span>
  </div>
  {ischeckout && (
    <Checkout onConfirm={submitOrderhandler} onCancel={props.onClose} />
  )}
  {!ischeckout && modalactions}
  </React.Fragment>

  const modalissubmitting = <p>Sending the orders</p>
  const modalsubmitted =
  <React.Fragment> 
   <p>Order sent successfully ....</p> 
   <div className={classes.actions}>
   <button className={classes.button} onClick={props.onClose}>
     Close
   </button>
   </div>

  </React.Fragment>


  return (
    <Modal onClose={props.onClose}>
    {!issubmitting && !submitted && modalcontent}
    {issubmitting && !submitted && modalissubmitting}
    {submitted && !issubmitting && modalsubmitted}
    </Modal>
  );
};

export default Cart;
