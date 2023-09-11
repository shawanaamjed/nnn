import React from 'react';
// import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Store from '../Store'
import Productcard from '../Productcard';
import products from '../products';
import { Fade } from 'react-reveal';
import Gallery from '../Gallery';


import Main from '../Main';
import "../hero.css";


import Carousel from 'react-bootstrap/Carousel';
import { useState,useEffect } from "react";


const Hero = () => {



  return (
    
    <div>

      <div className="hero-width" style={{height:'72vh'}}>
    <Carousel data-bs-theme="dark">
   
    <Carousel.Item>
        <div className="first-img">
        <img
          className="d-block "
          src="./images/new-images/main1.jpg"
          alt="Third slide"
          style={{height:'700px'}}
        />
        </div>
     
        <Carousel.Caption>
          <div className="main-cara1">
          <h1>WE LOVE TO MAKE CHEESE </h1>
       
          </div>
 
        </Carousel.Caption>
      </Carousel.Item>
   
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/che.webp"
          alt="Second slide"
          style={{height:'700px'}}
        /> */}
        {/* <Carousel.Caption>
          <div className="cara-main2">
          <Fade top>
          <h1>LET'S MAKE HEALTH WHITH US</h1>
          </Fade>
 <Fade left>   
      <p>    We make our products with love and care</p>
 </Fade>

          </div>

        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <div className="third-img">
        <img
          className="d-block w-100"
          src="./images/chill.jpg"
          alt="Third slide"
          style={{height:'700px'}}
        />
        </div>
     
        <Carousel.Caption>
          <div className="abc">
          <h1>We use pure ingredients,natural flavour </h1>
       <div className="line-cara"></div>
          </div>
 
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
    </div>
   {/* carousle end */}
<Main />

          <div className="border-line">
      <div className="line"></div>
      <div className="border-heading">Populer Collection </div>
      <div className="line"></div>
      </div>
    
 
      <div className="colect-card">
        <Fade bottom>

      
      <div className="shope-card">
          <img src="./images/dair5.webp" alt="food" />
          <div className="detail">
<h4>SHOP</h4>
<p>See the Collection</p>
          </div>
          </div>
          <div className="shope-card">
          <img src="./images/che2.jpg"  alt="food" />
          <div className="detail">
<h4>CHEESE</h4>
<p>See the Collection</p>
          </div>
          </div>
          <div className="shope-card">
          <img src="./images/ghee.jpg" alt="food" />
          <div className="detail">
<h4>PURE GHEE</h4>
<p>See the Collection</p>
          </div>
          </div>
          <div className="shope-card">
          <img src="./images/youg1.avif" alt="food" />
          <div className="detail">
<h4>YOUGERT</h4>
<p>See the Collection</p>
          </div>
          </div>
          </Fade>
      </div> 
      <div className="back">
        <img src="./images/back.jpg" alt="" />
      </div>
      <div className="border-line">
      <div className="line"></div>
      <div className="border-heading">Featured Collection </div>
      <div className="line"></div>
      </div>
      <Store />
      <div className="border-line">
      <div className="line"></div>
      <div className="border-heading">Our Gallery </div>
      <div className="line"></div>
      </div>
     

{/*      
      <div className="product-div">
    {products.map((item)=>(
     
        <div className="card" key={item.id}>  <Productcard item={item}/></div>
      
     

    ))} */}
    <Gallery />
</div>
// </div>
     
  
  );
}

export default Hero;
