import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";

export default function AllCards() {
  const { cartItem, amount } = useSelector((state) => state.cart);
  console.log("amount value is", amount);
  return (
    <div className="mt-5 d-flex flex-column justify-content-center">
      <p className="d-flex justify-content-center">
        <strong>Your bag {amount === 0 ? " is empty" : ""}</strong>
      </p>
      <div className="mt-3">
        {amount > 0 ? (
          cartItem.map((e) => (
            <Card
              image={e.img}
              title={e.title}
              price={e.price}
              amount={e.amount}
              id={e.id}
            />
          ))
        ) : (
          <div className="d-flex justify-content-center mb-3">
            <img
              src="https://st3.depositphotos.com/5390090/17577/v/600/depositphotos_175775088-stock-illustration-empty-shopping-bag-basket-icon.jpg"
              style={{ height: "250px", width: "300px" }}
            ></img>
          </div>
        )}
      </div>
    </div>
  );
}
