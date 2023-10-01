import {  NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
        <ul>        
    <li><NavLink to="/">Home</NavLink></li>  
    <li> <NavLink to="/about">About Us</NavLink></li> 
    <li><NavLink to="/contact">Contact Us</NavLink></li>  
      </ul>
    </nav>
  );
};
export default Navbar;
