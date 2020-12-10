import React from 'react'
import { UserContext,ChannelContext } from '../../App';

const ComponentF = () => {
    return (
        <div>
            {/* render props pattern --traditional way to consume context value before useContext */}
            <UserContext.Consumer>
                {
                    user=> {
                        return (
                            <ChannelContext.Consumer>
                                {
                                channel=>{
                                        return (
                                        <div>
                                            User Context Value{user} Channle context value{channel}
                                        </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                       
                    }
                }
            </UserContext.Consumer>
           
        </div>
    )
}

export default ComponentF
