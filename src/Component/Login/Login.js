import React,{ useState } from 'react'
import LoginUser from '../Services/LoginUser';
import PropTypes from 'prop-types';
import "./Login.css";

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await LoginUser({
      username,
      password
    });
    setToken(token);
  }
  return (
    // <div className="login-wrapper">
    //   <h1>Please Log In</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       <p>Username</p>
    //       <input type="text" onChange={e => setUserName(e.target.value)} />
    //     </label>
    //     <label>
    //       <p>Password</p>
    //       <input type="password"  onChange={e => setPassword(e.target.value)}/>
    //     </label>
    //     <div>
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>
    <div className="login-page">
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-12 col-lg-6">
        <div className="card login-box-container">
          <div className="card-body">
            <div className="authent-logo">
              <a href="#">
                <img src="../../assets/images/logo.png" />
              </a>
            </div>
            <form className="card-body bg-info">
              <div className="">
                <div className="text-center">
                  <h5  className='font-sizeLogin'>Login</h5>
                  <p className='text-white '>Continue to login</p>
                </div>
                
                <div>
                   <label htmlFor="floatingInput mb-1 " className='text-white'>Phone Number</label>
                  <input type="text" className="form-control"  placeholder="Enter Phone Number" />
                  
                </div>
              </div>
       
              <div className='mt-2'>
              <label htmlFor="floatingPassword mb-1 text-white" className='text-white'>Password</label>
                  <input type="password" className="form-control"  placeholder="*******" />
              </div>
              <div className='mt-5'>
              <button type="submit" class="btn btn-primary  w-100">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Login
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}