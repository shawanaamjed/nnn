import React from 'react';
import { Link } from 'react-router-dom';
const Shop = () => {
  return (
    <div>
      <div className="shops">
        <div className="container">
            <div className="shops-text">
                <h3>Now shop here</h3>
                <h1>PRODUCT OF THE DAY</h1>
                <p>Our services are available every time</p>
                <div className="btn-about">
                  <Link to='/product'>
                
                <button className='btn-smart'>Order Now</button>
                </Link>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;