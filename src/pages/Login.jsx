import React from "react";

import Add from "../images/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Inicia Secion</span>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Registrate</button>
        </form>
        <p>
          No tienes una cuenta? <a href="#">Registrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
