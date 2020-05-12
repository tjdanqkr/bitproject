import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const { register, handleSubmit, reset, errors } = useForm();

  const OnSubmit = (e) => {
    //e.preventdefault();
    const post = {
      id: id,
      pw: pw,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
        if (message === "re") {
          alert("다시 시도");
          reset();
        } else {
          window.sessionStorage.setItem("id", id);
          console.log("sus");
          window.location.replace("/");
        }
      });
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(OnSubmit)}>
        <input
          type="text"
          name="id"
          onChange={(e) => setId(e.target.value)}
          placeholder="id"
        />

        <input
          type="password"
          name="pw"
          onChange={(e) => setPw(e.target.value)}
          placeholder="password"
        />

        <input type="submit" value="Login" />
        <Link to="/join">
          <button>Join</button>{" "}
        </Link>
      </form>
    </div>
  );
}

export default Login;
