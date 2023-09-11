import React from 'react';
import { BiGrid } from 'react-icons/bi';
import { BiStreetView } from 'react-icons/bi';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Fade from "react-reveal/Fade"
import { BiSolidStar } from "react-icons/bi";
import { BiSolidCart } from "react-icons/bi";

import { BiSolidBullseye } from 'react-icons/bi';
import { AiFillEye } from "react-icons/ai";
import './yougert.css'
const Yougert = () => {
  return (
    <div className='main'>
      <div className="yougert">
        <div className="y-right">
<div className="categ">
  <div className="cata-border">
 < div className="lines"></div>
  <h4>
    Category
  </h4>
<div className="lines"></div>
  </div>
  <p>SHOP :</p>
  <div className="cata-names">
    <p>CHEESES</p>

    <p>PURE GHEE</p>
    <p>YOUGERTS</p>
  </div>
</div>
<img src="./images/youg.avif" alt="food" />

        </div>
        <div className="y-left">
            <div className="tops">

          
            <div>HOME /</div>
            <p>SHOP /</p>
            <p  className="p">YOUGERTS</p>
            </div>
            <div className="border-line">
      <div className="line"></div>
      <div className="border-heading">YOUGERTS Collection </div>
      <div className="line"></div>
      </div>
      <div className="view">
        <div className="view-p"> View as</div>
        <div className="vi">
        <div className="gir"> <BiGrid color='#333' /></div>
       <div className="gir">   <AiOutlineMenuUnfold /></div>
     
        </div>

      </div>
      <div className="y-flex">
      <Fade right >

<div className="span">
            <div className="pro-card pcard">
     
  <img src='./images/y-900g.jpg' alt='yougert' />
  <div className="card-display">
    <div className="iicon">
    <div className="cart-icon"><BiSolidCart size='30px' color='#b88910'/></div>
    <div className="cart-icn"><AiFillEye size='30px' color='#b88910' /></div>
    </div>

<div className="name">Sweet Yougert</div>
  <div className="price">
    <p>Rs: 180.00</p>
    <p>Weight:900g</p>

  </div>




  </div>

  <div className="star">
<div><BiSolidStar/></div>
<div ><BiSolidStar/></div>
<div ><BiSolidStar/></div>
<div><BiSolidStar/></div>
</div>

</div>
</div>


<div className="span">
            <div className="pro-card pcard">
     
  <img src='./images/plain-y450g.jpg' alt='yougert' />
  <div className="card-display">
    <div className="iicon">
    <div className="cart-icon"><BiSolidCart size='30px' color='#b88910'/></div>
    <div className="cart-icn"><AiFillEye size='30px' color='#b88910' /></div>
    </div>

  <div className="name">Sweet Yougert</div>
  <div className="price">
    <p>Rs</p>
    <p>150.00</p>
  </div>


  </div>

  <div className="star">
<div><BiSolidStar/></div>
<div ><BiSolidStar/></div>
<div ><BiSolidStar/></div>
<div><BiSolidStar/></div>
</div>

</div>
</div>


<div className="span">
            <div className="pro-card pcard">
     
  <img src='./images/y-400g.jpg' alt='yougert' />
  <div className="card-display">
    <div className="iicon">
    <div className="cart-icon"><BiSolidCart size='30px' color='#b88910'/></div>
    <div className="cart-icn"><AiFillEye size='30px' color='#b88910' /></div>
    </div>

  <div className="name">Sweet Yougert</div>
  <div className="price">
    <p>Rs</p>
    <p>150.00</p>
  </div>


  </div>

  <div className="star">
<div><BiSolidStar/></div>
<div ><BiSolidStar/></div>
<div ><BiSolidStar/></div>
<div><BiSolidStar/></div>
</div>

</div>
</div>
</Fade>
</div>   
</div>

    </div>
      </div>
    
  );
}

export default Yougert;
