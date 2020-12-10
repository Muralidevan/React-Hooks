import React ,{useState,useEffect}from 'react'

const IntervalHooksCounter = () => {

    const [count,setCount] = useState(0)

    const tick = ()=>{
        setCount(prevCount=>prevCount + 1)
    }


    // ! We can also USE MULTIPLE useEffect REACT_DOCS
    // ? Handling Incorrect dependencies
    // * dependencies array - to let react know everything that UseEffect must watch for (i.e props/states)
    useEffect(()=>{
        const interval = setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }

    },[])
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

export default IntervalHooksCounter
