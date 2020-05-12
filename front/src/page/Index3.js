import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './Logout';
import Map from './Map';

function Index3() {
  return (
    <div>
        
        {window.sessionStorage.getItem("id")}님 안녕하세요
        <Logout></Logout>
        <button><Link to ="/map">Map</Link></button>
        <button><Link to ="/join">Join</Link></button>
    </div>
  );
}

export default Index3;