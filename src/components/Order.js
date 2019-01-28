import React from "react";
import { formatPrice } from "../helpers";

const Order = props => {
  const orderIds = Object.keys(props.order);

  const totals = orderIds.reduce((prevTotal, index) => {
    const fish = props.fishes[index];
    const count = props.order[index];
    console.log(index);
    console.log(orderIds);
    const isAvailable = fish && fish.availability === "available";
    if (isAvailable) {
      return prevTotal + count * fish.cost;
    }
    return prevTotal;
  }, 0);
  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <ul className='order'>
        {orderIds.map(key => {
          const fish = props.fishes[key];
          const count = props.order[key];
          if ((fish.availability === "unavailable")) {
            return <li  key={key}>Sorry, {fish.name} is no longer available</li>;
          }
          return (
            <li key={key}>
              {count}Kg {fish.fishName} cost {formatPrice(count * fish.cost)}
            </li> 
          );
        })}
      </ul>
      <div className="total">
        <strong>Total: {formatPrice(totals)}</strong>
      </div>
    </div>
  );
};

export default Order;
