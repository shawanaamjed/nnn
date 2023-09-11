
import Productcard from './Productcard';
import products from '../products';

const Products = () => {
  return (
    <div>
        <h1>Our products</h1>
        <div className="pro-card">
        {
          products.map((item)=>(
<div key={item.id}>  <Productcard item={item} /></div>
          ))
        }
        </div>
      
    
    </div>
  );
}

export default Products;
