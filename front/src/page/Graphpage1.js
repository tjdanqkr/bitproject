import React, { useState } from "react";
import "../css/graph.css";
import { Bar, Bubble } from "react-chartjs-2";
import Axios from "axios";
function Graphpage1() {
  const [lists,setLists]=useState();
  var list;
  const testdatapro = () => {
    list={};
    var datasets = [];
    var labels= [];
    var datas = [];
    var backgroundColor= 'rgba(75,192,192,1)';
    var borderColor= 'rgba(0,0,0,1)';
    var borderWidth= 2;
    Axios.get("/json/testdata.json").then((data) => {
      var jsondata = data.data.test;
      for(let i = 0; i<jsondata.length; i++)
      {
        if (window.sessionStorage.getItem("gu") === jsondata[i].gu) {
          
          labels.push(jsondata[i].dong);
          datas.push(jsondata[i].testdata);
        }
      }  
      datasets.data=datas;
      datasets.backgroundColor=backgroundColor;
      datasets.borderColor=(borderColor);
      datasets.borderWidth=(borderWidth);
      datasets.label= "서울";
      list.labels=labels;
      list.datasets=datasets;
      console.log(list);
      setLists(list);
      return list;
    });
  };
  return (
    <>
      <div className="page1">
        <Bar width={300} width={200} data={function name(params) {
          console.log(lists); testdatapro();
        }} options={{
            title:{
              display:true,
              text:'서울',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}></Bar>
        <Bubble></Bubble>
      </div>
    </>
  );
}

export default Graphpage1;
