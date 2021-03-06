import React ,{useReducer}from 'react'

// ? useReducer with simple state and action 
// * step 1 useReducer(reducer,initial State)
//* step 2 define initial state and reducer (state,action)

const initialState = 0

const reducer = (state,action)=>{

    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }

}

const CounterReducer = () => {

    //* [newState,dispatch  method]
   const [count,dispatch] = useReducer(reducer,initialState)
   const [countTwo,dispatchTwo] = useReducer(reducer,initialState)

    return (
        <div>
            Counter {count}
            <button onClick={()=>{dispatch('increment')}}>increment</button>
            <button onClick={()=>{dispatch('decrement')}}>decrement</button>
            <button onClick={()=>{dispatch('reset')}}>reset</button>

            CounterTwo {countTwo}
            <button onClick={()=>{dispatchTwo('increment')}}>increment</button>
            <button onClick={()=>{dispatchTwo('decrement')}}>decrement</button>
            <button onClick={()=>{dispatchTwo('reset')}}>reset</button>

        </div>
    )
}

export default CounterReducer
