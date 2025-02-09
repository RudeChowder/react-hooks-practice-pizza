import React from "react";

function Pizza({ pizza, onClickEditPizza }) {
  const { topping, size, vegetarian } = pizza

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={() => onClickEditPizza(pizza)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
