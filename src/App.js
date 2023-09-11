
import './App.css';
import Navbar from './component/Navbar';

import Hero from './component/hero/Hero';
import Footer from './component/Footer';
import Yougert from './component/category/Yougert';
import Cheesepage from './component/category/Cheesepage';
import Ghee from './component/category/Ghee';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Productpage from './component/Productpage';
import About from './component/About';
import Contect from './component/Contect';
import Itempage from './component/Itempage';
import Recipy from './component/Recipy';
import Store from './component/Store';
import Cart from './component/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
 
      <Navbar />
   
      <Routes>
        <Route path='/' element={ <Hero /> }/>
        <Route path='/yougert' element={ <Yougert /> } />
        <Route path='/cheese' element={ <Cheesepage /> } />
        <Route path='/ghee' element={ <Ghee /> }/>
        <Route path='/product' element={ <Productpage /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contect' element={ <Contect/>} />
        <Route path='/recipy' element={ <Recipy /> } />
        <Route path='/store' element={ <Store /> } />
<Route path='/carts' element={<Cart />} />
        <Route path='/itempage' element={ <Itempage /> } />
        <Route path='/log' element={ <Login /> } />
      </Routes>
 


{/* <Store /> */}


<Footer />
      </BrowserRouter>
 




    </div>
  );
}

export default App;

