import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../images/back.png";
import menu from "../images/menu.PNG";
import { FiList } from "react-icons/fi"; 


function Footer() {
  const [list, setList] = useState(false);

  const onClick2 = (e) => {
    setList(true);
  };
  const seloption =(e)=>{
    console.log(e.target.value);
  }
  return (
    <div className="icons">
      <FiList onClick={onClick2}></FiList>
      
      {list ? (
        <div className="list">
          <select onClick={seloption}>
            <option></option>
            <option name ="커피숍" value="커피숍" >커피숍</option>
            <option name ="다방" value="다방" >다방</option>
            <option name ="전통찻집" value="전통찻집" >전통찻집</option>
            <option name ="떡카페" value="떡카페" >떡카페</option>
          </select>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Footer;
