import React from "react";
import "./Header.scss";
const Header = ({ categories }) => {
  return (
    <div className="header">
      <h1 className="baslik">Product List</h1>

      <div className="btnDiv">
        {categories.map((categories, index) => (
          <button key={index}>{categories}</button>
        ))}
      </div>
    </div>
  );
};
export default Header;
