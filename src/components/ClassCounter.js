import React, { Component } from 'react'

 class ClassCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    updateCount = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            <>
            <h1>Class Component</h1>
                <button onClick={this.updateCount}>Count {this.state.count}</button>
            </>
        )
    }
}

export default ClassCounter
