"use client";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "@/redux/features/counterSlice";
import { useCallback } from "react";
import { useGetUsersQuery } from "@/redux/services/userApi";

export default function Movie() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  const handleIncrement = useCallback(() => dispatch(increment()), [count]);
  const handleDecrement = useCallback(() => dispatch(decrement()), [count]);
  const handleReset = useCallback(() => dispatch(reset()), [count]);

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  console.log(data);
  

  return (
    <div style={{ marginBottom: "4rem", textAlign: "center" }}>
      <h4 style={{ marginBottom: 16 }}>{count}</h4>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement} style={{ marginInline: 16 }}>
        decrement
      </button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
