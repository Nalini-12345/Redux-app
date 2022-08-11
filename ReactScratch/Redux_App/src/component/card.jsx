import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "../features/cart/cartSlice";

export default function Card({ title, image, price, amount, id }) {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment({ id }));
  };
  const handleDecrement = () => {
    if (amount === 1) {
      dispatch(removeItem({ id }));
    }
    dispatch(decrement({ id }));
  };
  return (
    <div className="d-flex justify-content-center mb-5 ">
      <div className="p-2 card d-flex flex-row border border-success col-sm-6">
        <img
          src={image}
          className="img-responsive"
          style={{ height: "120px", width: "150px" }}
        ></img>
        <div>
          <h4>{title}</h4>
          <p>${price}</p>

          <div className="d-flex flex-row">
            <button className="btn btn-success mr-2" onClick={handleDecrement}>
              -
            </button>
            <p className="m-2">
              <strong>{amount}</strong>
            </p>
            <button className="btn btn-success ml-2" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
