import React from 'react';
import { Link } from 'react-router-dom';
import Circle from './Circle';

const Mainabout = () => {
  return (
    <div>
  <div className="aboutmain">
    <div className="containers">
        <div className="rows">
            <div className="about-text">
            <h3>ABOUT US</h3>
                <h1>HERE MAKERS BECOME MASTER .</h1>
                <p>
                Our  Cheesemaker and buttermaker program is one of only two in the world, so it's no wonder every Master  has called moloko home.
                </p>

              <div className="btn-about">
                <Link to='/about'>
                <button className='btn-smart'>READ MORE</button>
                </Link>
              </div>

        </div>
<Circle />
        <div className="aboutmain-img">
            <img src="./images/abimg1.jpg" alt="" />
        </div>
          
        </div>
    </div>
    </div>      
              
          
            
    </div>
  );
}

export default Mainabout;