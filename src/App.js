import './App.css';
import React,{createContext,useReducer} from 'react'
// import ClassCounter from './components/ClassCounter'
// import ClassCounterTwo from './components/ClassCounterTwo'

// import HookCounter from './components/HookCounter'
// import HookCounterTwo from './components/HookCounterTwo'
// import HookCounterObject from './components/HookCounterObject'
// import HookCounterArray from './components/HookCounterArray'
// import ClassCounterLifeCycle from './components/ClassCounterLifeCycle'
// import HookCounterUseEffect from './components/HookCounterUseEffect'
// import ClassMouse from './components/ClassMouse'
// import HooksMouse from './components/HooksMouse'
// import MouseContainer from './components/MouseContainer'
// import IntervalClassCounter from './components/IntervalClassCounter'
// import IntervalHooksCounter from './components/IntervalHooksCounter'
// import DataFetching from './components/DataFetching'
import ComponentC from './components/ContextApi/ComponentC'
import ComponentA from './components/ContextApi/ComponentA'
import ComponentB from './components/ContextApi/ComponentB'

import DataFetchingTwo from './components/ContextApi/DataFetchingTwo'



// import CounterReducerTwo from './components/UseReducer/CounterReducerTwo'
import MultipleReducer from './components/UseReducer/MultipleReducer'



// * step1- Create Context
export const UserContext = createContext()

// * demo -context multiple value
export const ChannelContext = createContext()

export const CountContext = createContext()


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




// * step2 - provide the context to child component with the value property

// * step 3 - consume context value e.g componentF
      function App() {

        const [count,dispatch]= useReducer(reducer,initialState)
        return (
          <div className="App">
            {/* Count {count} */}
<DataFetchingTwo/>
            


{/* 
<UserContext.Provider value={'murali'}>
  <ChannelContext.Provider value={'devan'}>
  <ComponentC/>
 

  </ChannelContext.Provider>
</UserContext.Provider> */}

{/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
<ComponentA/>
  <ComponentB/>
<ComponentC/>
</CountContext.Provider> */}


           
          {/* <ClassCounter/>
          <ClassCounterTwo/>

      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterObject/> */}
      {/* <HookCounterArray/> */}
{/* <ClassCounterLifeCycle/> */}
{/* <HookCounterUseEffect/> */}
{/* <ClassMouse/> */}
{/* <MouseContainer/> */}
{/* <MouseContainer/> */}
{/* <IntervalClassCounter/>
<IntervalHooksCounter/> */}
{/* <DataFetching/> */}

 {/*  Context API */}
 {/* <CounterReducerTwo/> */}
 {/* <MultipleReducer/> */}



          </div>
        );
      }

export default App;
