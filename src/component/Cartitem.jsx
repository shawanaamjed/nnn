import './hero.css'
const Cartitem = () => {
  return (
    <div>
     <div className="itemdetail">
        <div className="two">
         
            <img src="./images/plain-y450g-r.png" width='150px' alt="" />
        </div>
   
        <div className="two">
            <p>Name</p>
            <p>Plain Yougert</p>
        </div>
        <div className="two">
            <p>Quantity</p>
            <p>450g</p>
        </div>
        <div className="two">
            <p>Price</p>
            <p>Rs: 250.00</p>
            
        </div>
     </div>
    </div>
  );
}

export default Cartitem;