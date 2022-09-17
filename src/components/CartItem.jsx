import React from "react";

export const CartItem = ({ item, onAdd, onRemove }) => {
  return (
    <div className="row">
      <div className="col-2">{item.name}</div>
      <div className="col-2">
        <button onClick={() => onAdd(item)} className="add">
          +
        </button>
        <button onClick={() => onRemove(item)} className="remove">
          -
        </button>
      </div>
      <div className="col-2 text-right">
        {item.qty} x ${item.price.toFixed(2)}
      </div>
    </div>
  );
};
