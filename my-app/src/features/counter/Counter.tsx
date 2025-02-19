import { useDispatch, useSelector } from "react-redux"
import  "../counter/Counter.module.css"
import {increment,decrement,setCount} from "../../app/createAppSlice"
function CounterRender() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value
    )
    return ( <div>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button onClick={()=>{dispatch(setCount(0))}}>Reset button</button>
        <p>{count}</p>
        
    </div> );
}

export default CounterRender;
