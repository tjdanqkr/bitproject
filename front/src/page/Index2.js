import React from 'react';
import {Link} from 'react-router-dom';


function Index2() {
  return (
    <div>
        <button><Link to ="/login">Login</Link></button>
        <button><Link to ="/join">Join</Link></button>
    </div>
  );
}

export default Index2;
