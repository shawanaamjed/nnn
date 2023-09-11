import React from 'react';
import './store.css'
import storedata from './storedata'
const Store = () => {
  return (
    <div>
      <div className="main-store">
        <div className="store-items">
        {
          storedata.map((item)=>(
            <div className="store">
            <div className="store-icon"></div>
            <div className="store-head"><svg width='260' height='130'>
                <path id='curve' d='M 0 120 C 0 120, 130 0, 260 120'></path>
                <text className='text-curve' text-anchor='middle'>
                <textPath className='text-path' href='#curve' startOffset='50%'>{item.heading}</textPath>
                </text></svg></div>
            <div className="store-p"><p>{item.text}</p>   </div>
            <div className="p-w-div">
            <div className="weight">Weight:{item.weight}</div>
            <div className="store-price"> Rs:{item.price}.00</div>
            </div>
      
           <div className="img-store">
           <img src={item.url} alt="food" />
           </div>
      
        </div>  
          ))
        }
   
      </div>
      </div>
    </div>
  );
}

export default Store;
