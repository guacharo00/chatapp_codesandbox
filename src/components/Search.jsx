import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Encuentra un usuario" />
      </div>
      <div className="userChat">
        <img
          src="https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?quality=86&strip=all"
          alt=""
        />
        <div className="userChatInfo">
          <span>Mari</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
