import React from 'react';
import{ Fade } from 'react-reveal'
import { BiDiamond, BiSolidFactory ,  BiWorld} from 'react-icons/bi';
const About = () => {
  return (
    <div>
      <div className="border-line">
      <div className="line"></div>
      <div className="border-heading">ABOUT US </div>
      <div className="line"></div>
      </div>

    <div className="story">
      <h1>OUR STORY</h1>
      <p>At GMP FOODS ,our dairy farm families work with pride and care every day to produce wholesome,nutritious dairy products.Our commitment 
        to quality continous into the next step ,as our member milk is bottle or processed into dairy products.
        <span>GNPFoods</span> is a global dairy commodity provider ,active in all major dairy producing and consuming markets.We provider
        excellence for our clints accross the board in terms of product quality
        logistics services,market intelligence and risk management solutions.   </p>
    </div>
    <div className="story">
      <h1>OUR FEATURES</h1>
      <ol>
        <li>Favour enhancement</li>
        <li>Dairy powder can provide backed flavor during backing and heating.Milk powder and dairy powder can provide creamy daitr notes and ensures even flavor distribution </li>

        <li>Emulsification</li>
        <li>Prevents fats globules from forming one larg mass,improving products apperance .Milk powder or dairy powder is an all-natural emulsifying ingredient</li>

        <li>Gelling and Heat Settings</li>
        <li>Solubility</li>
        <li>Water Binding and Viscosity Building</li>
        <li>Some milk powders diserse well in food system .Milk powder or dairy powders prevnt sedimentation in beverages,soups and souces </li>
        <li>Whipping ,foaming and aeration</li>
        <li>Nutritional enrichment </li>
      </ol>
      </div>
  
      <div className="about">
        {/* <video>
          <source />
  </video> */}
   
        <div className="div">
          <Fade right>
          <div className="img-div">
          <div className="first-img">
   <img src="./images/fact.avif" alt="food" />
   </div>
       
          <div className="second-img">
            
          <img src="./images/dair6.jpg" alt="food" />
          </div>
          </div>
          </Fade>
          <Fade left>
     
          <div className="text-side">
          <div className="know">
    <div className="know-icon"> <BiSolidFactory size='90px' color='goldenrod'/>  </div>

 <div className="text-box">
   
 <h3>OUR FACTORY</h3>
 <div className="line"></div>
  <p>Our compney is producing nutritious food .It is a best source of vitamin D,C and E made  from the milk of cows but also other mammals
    and yaks..</p>
 </div>

 </div>
               </div>
               </Fade>
               </div>
               <div className="div1">
               <Fade left>
               <div className="text-side">
               <div className="know">
    <div className="know-icon"> <BiWorld size='90px' color='goldenrod'/>  </div>

 <div className="text-box">
   
 <h3>OUR TEAM</h3>
 <div className="line"></div>
  <p>Our team is</p>
 </div>

 </div>

</div>
</Fade>
<Fade right>
              <img src="./images/dair5.webp" alt="" />
              </Fade>
               </div>
               <div className="div2">
               <Fade right>
     
               <img src="./images/2cd.jpg" alt="" />
               </Fade>
               <Fade left>
               <div className="text-side">
               <div className="know">
    <div className="know-icon"> <BiDiamond size='90px' color='goldenrod'/>  </div>

 <div className="text-box">
   
 <h3>You should also know!</h3>
 <div className="line"></div>
  <p>Our compney is producing nutritious food .It is a best source of vitamin D,C and E made  from the milk of cows but also other mammals
    and yaks..</p>
 </div>

 </div>

              </div>
              </Fade>
               </div>
      </div>

    </div>
  );
}

export default About;