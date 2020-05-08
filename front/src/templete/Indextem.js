import React from 'react';
import Header from '../page/Header';
import Index2 from '../page/Index2';
import Index3 from '../page/Index3';


function Indextem() {
  return (
    <>
        <Header></Header>
        {window.sessionStorage.getItem("id")===""||window.sessionStorage.getItem("id")===null?
       (<Index2></Index2>):(<Index3></Index3>) 
      }
        
    </>
    
  );
}

export default Indextem;
