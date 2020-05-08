import React, { useState, useEffect } from "react";
import {useForm} from 'react-hook-form';


function Join2() {
  const [idcheck, setIdcheck] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [repw, setRepw] = useState("");
  const [checkmessage, setCheckMessage] = useState("");
  const {register, handleSubmit, reset, errors} = useForm();
  const idch = (e) => {
    //e.preventdefault();
    //setIdcheck(true);
    // const post = {
    //   id: id,
    // };
    // setCheckMessage("성공");
    // fetch("/api/idcheck", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(post),
    // })
    //   .then((response) => response.text())
    //   .then((message) => {
    //     setCheckMessage(message);
    //   });
    console.log(id);
  };
  const OnSubmit = ((e) =>{
    //e.preventdefault();
    if (pw === repw) {
    //   const post = {
    //     id: id,
    //     pw: pw
    //   };
      console.log("sus");
    }else
        console.log("fail");
  });


  return(
    <div>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <input type="text"  name="Id" onChange={(e) => setId(e.target.value)} />
        
        {(idcheck) ? ({ checkmessage } ): (null)}
        <input
          type="password" name="Pw"
          onChange={(e) => setPw(e.target.value)}
        />
        <input
          type="password" name="rePw"
          onChange={(e) => setRepw(e.target.value)}
        />
        <input type="submit" value="Join" />
        
      </form>
      <button onClick={idch}>아이디 중복 검사</button>
    </div>
  );
}

export default Join2;
