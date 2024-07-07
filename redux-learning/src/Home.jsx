import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  // {value1}
  // const value = 20;

  const { c } = useSelector((state) => state.custom);

  const dispatch = useDispatch();

  const addbtn = () => {
    dispatch({ type: "increment" });
  };
  const subbtn = () => {
    dispatch({ type: "decrement" });
  };

  const addBtn25 = () => {
    dispatch({ type: "incrementByValue", payload: 25 });
  };

  const subbtn25 = () => {
    dispatch({ type: "decrementByValue", payload: 25 });
  };

  return (
    <div>
      <h2>{c}</h2>

      <button onClick={addbtn}>Increment</button>
      <button onClick={addBtn25}>Increment by 25</button>
      <button onClick={subbtn25}>DecrementBy25</button>
      <button onClick={subbtn}>Decrement</button>
    </div>
  );
}

export default Home;
