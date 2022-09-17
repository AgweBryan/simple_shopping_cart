import React from "react";

export const Header = ({ cartItemsCount }) => {
  return (
    <header className="row block center">
      <div>
        <a href="#">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {cartItemsCount ? (
            <button className="badge">{cartItemsCount}</button>
          ) : (
            ""
          )}
        </a>
        <a href="#/signin">Signin</a>
      </div>
    </header>
  );
};
