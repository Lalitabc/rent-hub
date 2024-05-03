import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import StoreContext from '../store/store';

const Navbar = () => {
  const { data, isLoggedIn,isLogged, setIsLogged } = useContext(StoreContext);
  // const [} = useState(false); // State to track login status

  const checkLoginStatus = () => {
    const isLogged = localStorage.getItem('logged')
    setIsLogged(isLogged === 'true');
  };

  const [profileShow, setProfileShow] = useState(false);


  useEffect(() => {
    checkLoginStatus();
  }, [isLoggedIn]);

  return (
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={require("../images/rentalhub-logo-removebg-preview.png")} alt="" width={220} height={50} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fleet">Fleet</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Conditional rendering based on login status */}
          {isLogged ? (
            <div className='login'  onClick={()=> setProfileShow(prev => !prev)}>
              <span className="btn btn-primary">{localStorage.getItem('firstName')}</span>
              {profileShow==true ? <div className='profiledrop'>
                <span className='logout'>Profile</span>
                <span className='logout' onClick={()=> {
                  localStorage.setItem('logged',false)
                  setIsLogged(prev => !prev)
                }}>Logout</span>
                </div> : ''}
            </div>
          ) : (
            <div className='login'>
              <Link to='/loginpage' className="btn btn-primary">Login</Link>
            </div>
          )}
        </div>

        <Link to='cart' className='cart-container'>
          <span className='span-cart'>{data.length}</span>
          <img src={require("../images/cart.png")} alt="Cart" />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar;
