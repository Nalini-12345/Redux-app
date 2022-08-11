import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { addItemToCart, increment } from "../features/cart/cartSlice";

export default function Homecard({ image, price, title, id, amt }) {
  const { amount, cartItem } = useSelector((state) => state.cart);
  const { firstName } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = () => {
    if (!firstName) {
      navigate("/signup");
      return;
    }
    let item = {
      id: id,
      title: title,
      price: price,
      img: image,
      amount: amt,
    };
    let present = cartItem.some((ele) => {
      if (ele.id === id) return true;
      return false;
    });
    if (!present) dispatch(addItemToCart({ item }));
    else {
      navigate("/mybag");
    }
  };
  return (
    <div className="col-sm-3 mt-3">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          <button className="btn btn-success mx-auto" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
