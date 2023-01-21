import React from "react";
import { Link } from "react-router-dom";
import logo  from '../../../assets/logo/logo.jpg'

const Navbar = () => {
    const menuItems = <React.Fragment>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
    </React.Fragment>

  return (
    <div className="navbar bg-green-100 flex justify-between p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold "
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-3xl  font-bold">
          <img className="max-w-[50px] max-h-[80px]  " src={logo} alt="" />
          <span className="text-purple-600"> Dentals<span className="text-rose-500">Clinic</span></span>
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  font-bold">
                {menuItems}
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;