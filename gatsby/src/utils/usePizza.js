import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // 1. create some state to hold our order
  // we got rid of this line because we moved useState up to the Provider
  // const [order, setOrder] = useState([]);
  // now we access both our state and our update function (setOrder) via Context
  const [order, setOrder] = useContext(OrderContext);
  // 2. make a function add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // 3. make a function remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the remove index
      ...order.slice(0, index),
      // everything after the remove index
      ...order.slice(index + 1),
    ]);
  }
  // 4. send this data the serverless function when they check out.

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
