import React from 'react';

import Header from '../page/Header';
import Join from '../page/Join';


function Logout() {

  const OnClick=(e)=>{
    window.sessionStorage.removeItem("id");
    window.location.replace('/');
  }

  return (
    <div className="logout">
        <button onClick={OnClick}>logout</button>

    </div>
    
  );
}

export default Logout;
