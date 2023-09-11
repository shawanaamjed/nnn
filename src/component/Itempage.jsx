
import React from 'react';

import { BiWindowClose } from 'react-icons/bi';
const Itempage = () => {

  return (
    <div>
           <div className="border-line">
      <div className="line"></div>
      <div className="border-heading">Product Details </div>
      <div className="line"></div>
      </div>
     
        <div className='item-main'>
     
      <div className="itempage">
        {/* <div className="itemicon">
        <BiWindowClose size='25px' color='goldenrod'/>
        </div> */}
  
        <img src="./images/s-2kg.jpg" alt="item" />
        
        <div className="itemtext">
            <h2>Cheese</h2>
            <p>
Cheese: is an Italian cheese that is considered to be one of the top cheeses by cheese connoisseurs. It is a hard cheese that has a strong aroma, is grainy and dense in texture and has a savoury, fruity, nutty and sharp taste</p>
            <span>Rs 3000.00</span>
            <div className="itembtn">
                <button className='ibtn'>ADD TO CART</button>
                <button className='ibtn'>ADD TO WISHLIST</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Itempage;