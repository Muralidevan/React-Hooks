import React,{useState} from 'react'
import HooksMouse from './HooksMouse'

const MouseContainer = () => {

    const [display,setDisplay] = useState(true)
    return (
        <div>
            <button onClick={(e)=>setDisplay(!display)}>Display</button>

            {display && <HooksMouse/>}
        </div>
    )
}

export default MouseContainer
