import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <nav className="navbar">
        <div className="logo"><img src="/src/assets/logo/aspiraSysLogo.png" alt="" /></div>
        <div className="menu-toggle" id="mobile-menu" onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              exact 
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/program" 
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              Program
            </NavLink>
            </li>
            <li>
            <NavLink 
              to="/hirefromus" 
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              Hire from us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button className="register-btn">Register</button> {/* Register Button */}
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 9999;
    background-color: #fff;
    padding: 10px 20px;
    font-family: 'Poppins', sans-serif;
  }

  .logo {
    width: 10%;
    color: black;
    font-size: 24px;
    font-weight: 600;
  }
  .logo img {
    width: 100%;
  }
  .nav-list {
    list-style: none;
    display: flex;
    align-items: center;
    transition: height 0.3s ease, opacity 0.3s ease;
  }

  .nav-list li {
    margin: 0 15px;
  }

  .nav-list a {
    color: black;
    text-decoration: none;
    padding: 5px 10px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .nav-list a:hover {
    color: #3078ff;
    border-radius: 5px;
  }

  .active-link {
    color: #3078ff !important;
    font-weight: 700;
  }

  .register-btn {
    padding: 10px 20px;
    background-color: #3078ff;
    border-radius: 5px;
    font-size: 15px;
    border: navajowhite;
    color: white;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .register-btn:hover {
    background-color: #2e74f9cc; 
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    filter: invert(1);
  }

  .bar {
    height: 4px;
    width: 30px;
    background-color: white;
    margin: 3px 0;
    border-radius: 3px;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .nav-list {
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 47px;
      left: 0;
      background-color: #fff;
      height: 0;
      overflow: hidden;
    }

    .nav-list.active {
      display: flex;
      height: 250px;
      transition: height 0.5s ease, opacity 0.5s ease;
    }

    .menu-toggle {
      display: flex;
    }

    .nav-list li {
      margin: 10px 0;
      text-align: center;
    }
  }
`;

export default Navbar;
