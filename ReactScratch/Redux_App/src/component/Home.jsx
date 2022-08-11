import React from "react";
import cartItems from "./cartItems";
import Homecard from "./Homecard";

export default function Home() {
  return (
    <div className=" row mx-auto">
      {cartItems.map((ele) => {
        return (
          <Homecard
            image={ele.img}
            id={ele.id}
            price={ele.price}
            title={ele.title}
            amt={ele.amount}
          />
        );
      })}
    </div>
  );
}
