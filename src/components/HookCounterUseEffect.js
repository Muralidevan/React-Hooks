import React,{useState,useEffect} from 'react'

const HookCounterUseEffect = () => {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')



// ? useEffect(()=>{}) runs after first render and after every update/render{might create performance problem}
useEffect(()=>{

    console.log('UseEffect updating the document title')
    document.title = `Clicked ${count } times`
    // ? To conditionally run UseEffect we should pass second parameter array,[]
    // * Within the array we should specify the dependencies i.e props or states need to watch for
    //  * The effect will execute only when the props/states changes which are specified in array
    // * For Example here only when count value changes the useEffect will Execute
},[count])

    return (
        <div>
            <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
           <button onClick={()=>setCount(count + 1) }>Click {count} times</button> 
        </div>
    )
}

export default HookCounterUseEffect
