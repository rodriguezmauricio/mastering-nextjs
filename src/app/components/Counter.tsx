import { useCounterStore } from "@/stores/counterStore";
import React from "react";
import Button from "./Button";

const Counter = () => {
    const { count, increment, decrement } = useCounterStore();

    return (
        <div>
            <h2>Count: {count}</h2>
            <Button text="Increment +1" onClick={increment} secondary={false} />
            <Button text="Decrement -1" onClick={decrement} secondary={false} />
        </div>
    );
};

export default Counter;
