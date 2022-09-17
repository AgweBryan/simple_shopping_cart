import React from "react";
import { CartItem } from "./CartItem";

export const Basket = ({ cartItems, onAdd, onRemove }) => {
  const itemPrice = cartItems.reduce((a, b) => a + b.price * b.qty, 0);
  const shippingPrice = itemPrice > 2000 ? 3 : 50;
  const taxPrice = itemPrice * 0.14;
  const totalPrice = taxPrice + shippingPrice + itemPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>

      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            onAdd={onAdd}
            onRemove={onRemove}
            item={item}
          />
        ))}

      {cartItems.length > 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert("Implement Checkout")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
};
