import React from 'react';
import Mainabout from './Mainabout';
import Shop from './Shop';
import Prodetail from './Prodetail';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-content">
            <div className="container">
                <div className="banner-text">
                <h3>Health Store</h3>
                <h1>WELLCOME TO WORLD OF TASTE</h1>
                <p>We've been  making the world's finest cheese,butter,yougert,milk since before we were even a state, but that's only part of the answer...</p>
                <div className="btn-about">
                  <Link to='/product'>
                 
                <button className='btn-smart'>EXPLORE</button>
                </Link>
              </div>
                </div>

            </div>
        </div>
      </div>
      <Mainabout />
<Shop />
<Prodetail />
    </div>
  );
}

export default Main;