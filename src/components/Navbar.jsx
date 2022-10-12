import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?quality=86&strip=all"
          alt=""
        />
        <span>Luis</span>
        <button>Salir</button>
      </div>
    </div>
  );
};

export default Navbar;
