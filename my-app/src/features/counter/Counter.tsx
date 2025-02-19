import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./Counter.module.css"
import {increment,decrement,setCount} from "../../app/createAppSlice"
function CounterRender() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value
    )
    return ( <div>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <p>{count}</p>
        
    </div> );
}

export default CounterRender;
