import React from 'react';
import Cartitem from './Cartitem';
import './hero.css'
const Cart = () => {
  return (
    <div className='main-cart'>
      <Cartitem />
      <div className="ccart">
      <h3>Subtotal:250</h3>
   
   
      <div className="crt-btns">
      <button className="c-btn btn">Checkout</button>
      <button className="g-btn btn">Go Back</button>
      <button className="e-btn btn">Empty cart</button>
      </div>
      </div>

  {/* <div className="other-img">
    <img src="./images/s-2kg.jpg" alt="food" />
    <img src="./images/s-cge.jpg" alt="food" />
    <img src="./images/plain-y450g.jpg" alt="food" /> */}
    {/* <img src="./images/.jpg" alt="food" /> */}
{/* 
  </div> */}
</div>
 
  );
}

export default Cart;