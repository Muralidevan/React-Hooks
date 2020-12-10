import React ,{useContext}from 'react'
import {CountContext} from '../../App'

const ComponentD = () => {

    const countcontext = useContext(CountContext)
    return (
        <div>
            Component D
            Count {countcontext.countState}

            <button onClick={()=>{countcontext.countDispatch('increment')}}>increment</button>
            <button onClick={()=>{countcontext.countDispatch('decrement')}}>decrement</button>
            <button onClick={()=>{countcontext.countDispatch('reset')}}>reset</button>
        </div>
    )
}

export default ComponentD
