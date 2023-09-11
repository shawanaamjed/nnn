import React from 'react';
import { Link } from 'react-router-dom';
const Prodetail = () => {
  return (
    <div>
  <div className="aboutmain">
    <div className="containers">
        <div className="rows">
        <div className="detailmain-img">
            <img src="./images/plater.avif" alt="" />
        </div>
            <div className="about-text">
            <h3>Product Details</h3>
                <h1> WE MAKE <span>BRAND</span>.</h1>
                <p>
                Our  Cheese ,Milk ,Yougert and Butter products will introduce the new world of taste and quality.
                </p>

              <div className="btn-about">
                <Link to='/product'>
                <button className='btn-smart'>GO TO STORE</button>
                </Link>
              </div>

        </div>
      
          
        </div>
    </div>
    </div>  
  
    </div>
  );
}

export default Prodetail;