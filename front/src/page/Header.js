import React from 'react';
import { Link } from 'react-router-dom';
import home from"../images/home.jpg";
import { FaHome } from "react-icons/fa"; 
import "../css/header.css";
function Header() {
  return (
    <div className="header">
        <h1>상권 분석 시스템</h1>
        <Link to='/'>
            <FaHome className="Home"></FaHome>
        </Link>
    </div>
  );
}

export default Header;
