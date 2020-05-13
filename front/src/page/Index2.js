import React from 'react';
import {Link} from 'react-router-dom';
import { FiUserPlus,FiUserCheck } from "react-icons/fi"; 
import "../css/index.css";

function Index2() {
  return (
    <div className="index">
        <Link to ="/login" className="login"><FiUserCheck></FiUserCheck>
        <h3>login</h3>
        </Link>
        <Link to ="/join" className="join"><FiUserPlus></FiUserPlus>
        <h3>join</h3></Link>
    </div>
  );
}

export default Index2;
