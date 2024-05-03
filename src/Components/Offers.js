import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import StoreContext from '../store/store'
import "bootstrap/dist/css/bootstrap.min.css";
const Offers = () => {
 
   const {addTocart,isLogged}= useContext(StoreContext);

  return (
    <div className="services">
      <div className="container">
        
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Our <em>Offers</em></h2>
              <span>Aliquam id urna imperdiet libero mollis hendrerit</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={"https://car-hub-car-showcase-website.vercel.app/_next/image?url=%2Fhero.png&w=2048&q=75"} alt="" />
              <div className="down-content">
                <h4>Seden car</h4>
                <div style={{ marginBottom: "10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim. Nunc ornare leo tortor.</p>
                <Link  className="filled-button" onClick={(e) => isLogged ?   addTocart({ id: 0,img:'https://car-hub-car-showcase-website.vercel.app/_next/image?url=%2Fhero.png&w=2048&q=75',countItem:0, carName: 'Seden car' }) : alert('First login')}>Book Now</Link>
              </div>
            </div>

            <br />
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={'https://cdn.motor1.com/images/mgl/OpLgM/s4/2021-toyota-rav4-prime.webp'} alt="" />
              <div className="down-content">
                <h4>Odio libero vel autem atque consequuntur</h4>
                <div style={{ marginBottom: "10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim.</p>
                <Link className="filled-button" onClick={(e) => isLogged ? addTocart({ id: 1, img:'https://cdn.motor1.com/images/mgl/OpLgM/s4/2021-toyota-rav4-prime.webp', countItem:0,carName: 'Odio libero vel autem atque consequuntur' }) :  alert('First login')} >Book Now</Link>
              </div>
            </div>
            <br />
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={'https://imgd-ct.aeplcdn.com/1056x660/n/0b8pp0b_1638611.jpg?q=80'} alt="" />
              <div className="down-content">
                <h4>Red Thar </h4>
                <div style={{ marginBottom: "10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim.</p>
                <Link className="filled-button" onClick={(e) => isLogged ? addTocart({ id: 2,img:'https://imgd-ct.aeplcdn.com/1056x660/n/0b8pp0b_1638611.jpg?q=80', countItem:0,carName: 'Odio libero vel autem atque consequuntur' }) :  alert('First login')}>Book Now</Link>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers