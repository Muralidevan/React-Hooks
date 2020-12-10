import React ,{useContext} from 'react'
// import ComponentF from './ComponentF'
import {  UserContext,ChannelContext} from '../../App';


// * step1 - import useContext Hook
// * step2 - import neccassary Contexts e.g UserContext,ChannelContext

// * step3 call useContext() passing in Contexts as arguments

const ComponentE = () => {

   const user=  useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            User {user} , Channel {channel}
            {/* <ComponentF/> */}
        </div>
    )
}

export default ComponentE
