import React from "react";
import { useState } from "react";
import ToggleMessage from "./ToggleMessage";



const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(prev => prev + 1);
    }

    const decreaseCount = () => {
        if (count <= 0){
            return
        }
        setCount(prev => prev - 1);
    }
    
    return(
        <div className="shadow rounded-5 p-5 bg-white text-dark d-flex flex-column justify-content-center align-items-center transition-size" >
            <ToggleMessage number={count} />
            <h1>{count}</h1>
            <p>Click to increase or decrease number</p>
            <div>
            <button className="btn btn-primary m-3" onClick={decreaseCount}>Decrease</button>
            <button className="btn btn-primary m-3" onClick={increaseCount}>Increase</button>
            </div>
        </div>
    )
}

export default Counter;