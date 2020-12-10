import './App.css';
import React,{createContext, useContext, useDebugValue} from 'react'
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


// * step1- Create Context
export const UserContext = createContext()

// * demo -context multiple value
export const ChannelContext = createContext()




// * step2 - provide the context to child component with the value property

// * step 3 - consume context value e.g componentF
      function App() {
        return (
          <div className="App">



<UserContext.Provider value={'murali'}>
  <ChannelContext.Provider value={'devan'}>
  <ComponentC/>

  </ChannelContext.Provider>
</UserContext.Provider>
           
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



          </div>
        );
      }

export default App;
