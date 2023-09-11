import React from 'react';
import storeitem from './Storeitems';
import Productcard from './Productcard';
import { Link } from 'react-router-dom';
import { BiSolidCart } from "react-icons/bi";

const Productpage = () => {
  return (
    <div className='pro'>
             <div className="border-line">
      <div className="line"></div>
      <div className="border-heading">Our products </div>
      <div className="line"></div>
      </div>
             
        <div className="product-div">
        {
          storeitem.map((item)=>(
<div key={item.id} className='card'>  <Productcard item={item} /></div>

          ))
        }
         
      
         
        </div>
    </div>
  );
}

export default Productpage;

