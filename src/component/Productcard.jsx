import React from 'react';

import { BiSolidStar } from "react-icons/bi";
import { BiSolidCart } from "react-icons/bi";
import Fade from "react-reveal/Fade"
import { BiSolidBullseye } from 'react-icons/bi';
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Productcard = ({ item }) => {
  const [items, setItems] = useState(false);
const showhide=()=>{
  if ( items===false){
    setItems(true)
  }else{
    setItems(false)
  }


}
  return (
    <div className='product-main-div'>
   
     
        <Fade right>
<div className="span">

                 <div className="pro-card">
                  <div className="inner">
                 <div className="div-showbtn">

      </div>
        <img src={item.url} alt={item.name} />
        <p className='item-head'>{item.heading}</p>
        <p className='shop-text'>{item.text}</p>
        <div className="pw">
          <p>RS:{item.price}</p>
          <p>{item.weight}</p>
        </div>
        <div className="card-display">


        <div className="name">{item.name}</div>

      
        </div>
  
        <div className="star">
<div><BiSolidStar/></div>
<div ><BiSolidStar/></div>
<div ><BiSolidStar/></div>
<div><BiSolidStar/></div>
</div>
   
      
</div>

</div> 
</div> 
<div className='iicon  '>

    
<div className="cart-icon"  >


  <Link to='/carts'> <BiSolidCart size='30px' color='#b88910'/> </Link>

  </div>

<Link to='/itempage'>
<div className="cart-icon"><AiFillEye size='30px' color='#b88910' /></div>
</Link>
</div>
</Fade>

      </div>
   
    
  );
}

export default Productcard;
