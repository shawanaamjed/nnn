

import React,{useState,useEffect, useRef} from 'react';
// import { Link } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import {BiSearchAlt2  } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiSolidCart } from "react-icons/bi";
import {BiSolidCheese  } from "react-icons/bi";
import { BiSolidChevronDown } from "react-icons/bi";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import {BiSolidTrash  } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiSolidShoppingBag } from "react-icons/bi";
import { BiSolidSun } from "react-icons/bi";
import { BiChild } from "react-icons/bi";
import { BiDialpad } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./nav.css"

const subData=[
  {id:1 ,name:<Link to='/cheese' style={{color:'black',textDecoration:'none'}}>CHEESE </Link>},
  {id:2 ,name:<Link to='/ghee'  style={{color:'black',textDecoration:'none'}}>PURE GHEE </Link> },
  {id:3 ,name:<Link to='/yougert'  style={{color:'black',textDecoration:'none'}}>YOGURT</Link> },


];
// document.onClick=function(e){
//   if(e.target.id!=='sidebar' && e.target.id !== 'toggle'){
//     ToggleButton.class.remove('active');
//     BiSidebar.classlist.remove('active')
//   }
// }

const Navbar = () => {

const [mobileLink, setMobileLink] = useState(false);
  const [showCatMenu,setShowCatMenu]=useState(false);
  let menuRef=useRef()
//   useEffect(() => {
// let handler=(e)=>{
// if(!menuRef.current.contains(e.target)){
//   setMobileLink(false)
//   console.log(menuRef.current)
// }


// }
// document.addEventListener("mousedown",handler)
//   });
  return (
    <div>
      <div className="main-navbar"  ref={menuRef}>
      <div className="top">
 

        <div className="logo">
        <img src="./images/logo-r.png" alt="" />

        </div>
     
<div className="rig-div">

  <div>
    <BiChild/>
    <Link to='/log'>
    <button className="btn">REGISTER</button>
    </Link>
  </div>
<div>
  <BiLogInCircle />
  <Link to='/log'>
  <button className="btn">LOG IN</button>
  </Link>
</div>
   
</div>
<div className="menu" onClick={()=>setMobileLink(!mobileLink)}>
 <BiMenu size='34px'/>
</div>

     
      </div >
      <div className="bottom">
        <div className='logs'>
        <div className="llog">
        <img src="./images/out.png" alt="" width='150px' />
 </div>
 <div className="gnp">
 <img src="./images/gmp.png" alt="" width='150px' />
 </div>

        </div>


     
       <ul>
    <Link to='/'  style={{color:'black',textDecorationLine:'none'}}>
      <li>
    
          <div  className='icons'><BiHome size='25px' className='icon' width='100%' color='black'/>
          <BiHome  className='icon'size='25px' width='100%' color=''/>
          
          </div>
    
        <div className="nav-name" style={{color:'black'}}><span data-text='HOMEPAGE'>HOMEPAGE</span></div>
       
      </li>
      </Link>
      <li>
        <Link to='/product'  style={{color:'black',textDecorationLine:'none'}}>
        <div  className='icons'><BiSolidShoppingBag size='25px' className='icon'  width='100%' color='black'/>
        <BiSolidShoppingBag  className='icon' size='25px' width='100%' color=''/>
        
        </div>
        </Link>
        <div className="drop"   onMouseEnter={()=>setShowCatMenu(true)}
        onMouseLeave={()=>setShowCatMenu(false)}>
        <div className="nav-name nav-shop" ><span data-text='SHOP'>SHOP</span></div>
        <BiSolidChevronDown className='down' size='30px' color='goldenrod'/>
        { showCatMenu &&(
        <ul className='absolute'>
            {
                subData.map((items)=>{
                    return(
                        <div key={subData.id}>
                        <li className='h-12'>
                            {items.name}</li>
                        </div>
                    )

                })
            }
        </ul>
       )}
        </div>
     
  
      </li>
      <Link to='/recipy'  style={{color:'black',textDecorationLine:'none'}}>
      <li>
  
        <div  className='icons'><BiSolidCheese  size='25px'  className='icon' width='100%' color='black'/>
        <BiSolidCheese  className='icon' size='25px'  width='100%' color=''/>
        
        </div>
        <div className="nav-name" style={{color:'black',textDecorationLine:'none'}}><span data-text='SAY TASTE'>SAY TASTE</span></div>
       
      </li>
      </Link>
      <Link to='/about'  style={{color:'black',textDecorationLine:'none'}}>
      <li>

        <div  className='icons'><BiMessageDetail size='25px' width='100%'  className='icon' color='black' />
        <BiMessageDetail  width='100%'size='25px' className='icon'  color=''/>
        
        </div>
      
   
        <div className="nav-name"  style={{color:'black',textDecorationLine:'none'}}><span data-text='ABOUT'>ABOUT</span></div>
        
      </li>
      </Link>
      <Link to='/contect'  style={{color:'black',textDecorationLine:'none'}}>
      <li>
     
        <div  className='icons'><BiSolidPhone size='25px' className='icon'  width='100%' color='black'/>
        <BiSolidPhone  className='icon' size='25px' width='100%' color=''/>
        
        </div>
   
        <div className="nav-name"  style={{color:'black',textDecorationLine:'none'}}><span data-text='CONTACT US'>CONTACT US</span></div>
   
      </li>
      </Link>
    </ul>
    {/* start small menu */}
   

      </div>
      </div>
      {/* <div className="menu-icon" onClick={Showmenu}><BiMenu size='40px' color='#222'/></div> */}
 <div className="mobile-menu"  ref={menuRef}>


        <ul className={mobileLink?'small-nav':'bottom'}>
          <Link to="/" className='linksof'>
          <li >HOME</li>
          </Link>
          <Link to='/about' className='linksof'>
          <li>ABOUT</li>
          </Link>
          <Link to ='/store' className='linksof'>
          <div className="drop"   onMouseEnter={()=>setShowCatMenu(true)}
        onMouseLeave={()=>setShowCatMenu(false)}>
          <li className='shop-nav'>SHOPE</li>
          {/* { showCatMenu &&(
        <ul className='absolutes'>
            {
                subData.map((items)=>{
                    return(
                        <div key={subData.id}>
                        <li className='h-12'>
                            {items.name}</li>
                        </div>
                    )

                })
            }
        </ul>
       )} */}
</div>
          </Link>
          <Link to='/recipy' className='linksof'>
          <li>SAY TASTE</li>
          </Link>
          <Link to='/contect' className='linksof'>
          <li>CONTECT</li>
          </Link>
  
        </ul>
        </div>
    </div>
  );
}

export default Navbar;