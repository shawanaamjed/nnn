import React from 'react';

const Login = () => {
  return (
<div>
    <div className='log'>
        <div className="container">

      
      <div className="wrapper">
      <div className="titel">
      Registration Form
      </div>
      <div className="form">

    
        <div className="input-field">
            <label> Name</label>
            <input type="text" className='input' />
        </div>
     
        <div className="input-field">
            <label>Password</label>
            <input type="password" className='input' />
        </div>
        <div className="input-field">
            <label>Confirm Password</label>
            <input type="password" className='input' />
        </div>
        <div className="input-field">
            <label>Gender</label>
           <div className="select">
            <select>
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
           </div>
        </div>
        <div className="input-field">
            <label>Email-address</label>
            <input type="text" className='input' />
        </div>
        <div className="input-field">
            <label>Phone Number</label>
            <input type="text" className='input' />
        </div>
        <div className="input-field">
            <label>Address</label>
       <textarea  className="textarea"></textarea>
        </div>
        <div className="input-field">
            <label>Postal Code</label>
            <input type="text" className='input' />
        </div>
        <div className="input-field term" >
            <label className='check'><input type="checkbox" />
            <span className='checkmark'></span>
            </label>
            <p>Aggread to terms and conditions</p>
            
        </div>
        <div className="input-field">
      
            <input type="submit" value='Register' className='regs-btn' />
        </div>
      </div>
         
      
      </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
