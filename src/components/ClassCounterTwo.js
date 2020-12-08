import React, { Component } from 'react'

export default class ClassCounterTwo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementCount = ()=>{
        this.setState(prevState=>{
            console.log(prevState,"prevState")
            return {
                count:prevState.count+1

            }
        })
    }

    
    render() {
        return (
            <div>
                <h1>Class Counter with prevState</h1>
                <p>Count:{this.state.count}</p>
                <button onClick={this.incrementCount}>increment</button>
            </div>
        )
    }
}
