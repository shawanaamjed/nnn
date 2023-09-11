import React from 'react';
import products from './products';
import { Fade } from 'react-reveal';
const Gallery = () => {
  return (
    <div>
      <div className="gallery">
             
      <Fade top>


         
      <div className="g-images">     
{
    products.map((item)=>(
        <div className="g-img">
    <img src={item.img} alt="gallery" />
        </div>
    
    ))
}
      </div>
      </Fade>
 </div>  

    
    </div>
  );
}

export default Gallery;
