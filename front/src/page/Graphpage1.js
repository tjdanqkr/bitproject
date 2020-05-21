import React from 'react';
import "../css/graph.css"

function Graphpage1() {
  return (
    <>
      <div className="page1">
            <img src={window.sessionStorage.getItem("message")}></img>
  
      </div>
    </>
    
  );
}

export default Graphpage1;
