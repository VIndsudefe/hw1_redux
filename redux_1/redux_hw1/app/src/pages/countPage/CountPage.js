import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


function CountPage() {

  const [count, setCount] = useState(0);
  const dispatch =  useDispatch();
  let counter = useSelector(state => state.counter);

  const increment = () => {
    dispatch({
      type: "INCREMENT",
      payload: counter = counter+1
    })
  }

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
      payload: counter = counter - 1
    }) 
  }

  return (
    <>
        <h1 onChange={e => setCount(e.target.value)}>{counter}</h1>
        <button style={{marginRight: "2%"}} onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

    </>
  )
}

export default CountPage  