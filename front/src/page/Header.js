import React from 'react';
import { Link } from 'react-router-dom';
import home from"../images/home.jpg";


function Header() {
  return (
    <div>
        <h1>상권 분석 시스템 </h1>
        <Link to='/'>
            <img src={home}></img>
        </Link>
    </div>
  );
}

export default Header;
