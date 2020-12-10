import React,{useState,useEffect} from 'react'

const HooksMouse = () => {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logPosition = (e)=>{
            setX(e.clientX)
            setY(e.clientY)

    }
    
    // * Run Effect  executes Only Once after the initial render and doesn't depend on any props or state values
    // * second parameter empty array,[]
    useEffect(()=>{
        console.log('useEffect Called')
        window.addEventListener('mousemove',logPosition)

        // * Componentwillunmount mimic

        return ()=>{
            // * useEffect with clean Up
            // * cancel all subscriptions and asynchronous tasks here
            // * clean up code to avoid memory leaks
            console.log('component will unmount')
            window.removeEventListener('mousemove',logPosition)
        }
    },[])

    return (
        <div>
            Hooks X - {x} Y - {y}
            
        </div>
    )
}

export default HooksMouse
