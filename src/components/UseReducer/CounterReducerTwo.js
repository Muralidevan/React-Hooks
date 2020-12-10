import React ,{useReducer}from 'react'

// ? useReducer with complex state and action  with objects
// * step 1 useReducer(reducer,initial State)
//* step 2 define initial state and reducer (state,action)

const initialState = {
    firstCounter:0,
    secondCounter:10,
}

const reducer = (state,action)=>{

    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter + action.payload}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter - action.payload}
        case 'incrementTwo':
                return {...state,secondCounter:state.secondCounter + action.payload}
         case 'decrementTwo':
                return {...state,secondCounter:state.secondCounter - action.payload}

        case 'reset':
            return initialState
        default:
            return state
    }

}

const CounterReducer = () => {

    //* [newState,dispatch  method]
   const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
           <h1>firstCounter {count.firstCounter}</h1> 
            <h2>secondCounter {count.secondCounter}</h2>
          
            <button onClick={()=>{dispatch({type:'increment',payload:1})}}>increment</button>
            <button onClick={()=>{dispatch({type:'decrement',payload:1})}}>decrement</button>

            <button onClick={()=>{dispatch({type:'increment',payload:5})}}>increment 5</button>
            <button onClick={()=>{dispatch({type:'decrement',payload:5})}}>decrement 5</button>

            <button onClick={()=>{dispatch({type:'incrementTwo',payload:1})}}>second Counter increment</button>
            <button onClick={()=>{dispatch({type:'decrementTwo',payload:1})}}>second counter decrement</button>


            <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>

        </div>
    )
}

export default CounterReducer
