import React, { useState, useEffect } from "react";
import {useForm} from 'react-hook-form';


function Join() {
  const [idcheck, setIdcheck] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [repw, setRepw] = useState("");
  const [test, settest] = useState("123");
  const [checkmessage, setCheckMessage] = useState("");
  const {register, handleSubmit, reset, errors} = useForm();
  

  const idch = () => {
    //setIdcheck(true);
    const post = {
      id: id,
    };
    fetch("/checkId", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
        setCheckMessage(message);
        setIdcheck(true);
      });
      
    
  };
  const OnSubmit = ((e) =>{
    //e.preventdefault();
    if (pw === repw) {
    //   const post = {
    //     id: id,
    //     pw: pw
    //   };
      console.log("sus");
      window.location.replace('/');
    }
    console.log("fail");
  });


  return(
    <div className="Join">
      <form onSubmit={handleSubmit(OnSubmit)}>
        <input type="text"  name="Id" onChange={(e) => setId(e.target.value)} placeholder="id" />
        <input type="button" onClick={idch} value="아이디 중복 검사"/>
        {(idcheck===true ? <p>{checkmessage}</p>  : <p>중복입니다</p>)}
        <input
          type="password" name="Pw"
          onChange={(e) => setPw(e.target.value)}
          placeholder="password"
        />
        <input
          type="password" name="rePw"
          onChange={(e) => setRepw(e.target.value)}
          placeholder="REpassword"
        />
        <input type="submit" value="Join" />
        
      </form>
    </div>
  );
}

export default Join;
