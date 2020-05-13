import React from 'react';

import Header from '../page/Header';
import Join from '../page/Join';
import { FiUserMinus } from "react-icons/fi"; 

function Logout() {

  const OnClick=(e)=>{
    window.sessionStorage.removeItem("id");
    window.location.replace('/');
  }

  return (
    <div className="logout">
        <FiUserMinus onClick={OnClick}></FiUserMinus>

    </div>
    
  );
}

export default Logout;
