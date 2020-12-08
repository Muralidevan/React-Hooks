import React,{useState} from 'react'

const HookCounterTwo = () => {

    const initialValue = 0

    const [count,setCount] = useState(initialValue)

    const incrementCountFive = ()=>{
        for(let i=0;i<5;i++){
            // setCount(count=>count + 1) --Output:count:1
            //reason setCount function is asynchronous and
            //  react batches multiple setCount functions together so that it can render UI efficiently
           
         setCount(prevState=> prevState + 1  ) //O/p:count:5 ,setCount((prevState)=>{prevState+1}),setCount(callback)
        }
    }
    return (
        <div>
            <h1>Function Component Hooks with prevState</h1>
    <p>count:{count}</p>
    <button onClick={()=>setCount(initialValue)}>Reset</button>
    <button onClick={()=>{setCount(prevState=>prevState + 1)}}>Increment</button>
    <button onClick={()=>{setCount(prevState=>prevState - 1)}}>Decrement</button>
    <button onClick={incrementCountFive}>Increment 5</button>

        </div>
    )
}

export default HookCounterTwo
