import "./Navbar.css";
import down from '../../Assets/down.png'
import cart from '../../Assets/cart.png'
import { myContext } from "../../App";
import { useContext } from "react";

const Navbar = () => {

  const {cartCount} = useContext(myContext)

  return (
    <div className="navbar">
      <div className="navbar-content">
        <p className="brand">YourShop</p>
        <ul className="nav-link">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Shop <span><img className='down' src={down} alt=''/></span></li>
        </ul>
        <div className='cart'>
           <button className='cart-button'><span><img className='cart-icon' src={cart} alt=''/></span> Cart <span className='badge' id='cartCount'> {cartCount} </span></button>
       </div>
      </div>
      
    </div>
  );
};

export default Navbar;
