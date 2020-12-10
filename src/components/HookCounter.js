import React,{useState} from 'react'

const HookCounter = () => {
    // * useState- Accepts initial value for state property {-e.g 0} and
    // *  returns current value of state property {-e.g. count} and
    // * returns a method {setter function }that is capable of updating state property {-e.g setCount}
  
    const [count,setCount] = useState(0)
    return (
        <div>
            <h1>Function Component Hooks</h1>
    <button onClick={()=>{setCount(count+1)}}>Count  {count}</button> 
        </div>
    )
}

export default HookCounter
