import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count : this.state.count +1
        })

    }

    incrementbyfive(){
        this.setState({
            count : this.state.count+5
        })
    }



  render() {
    return (
      <div>
        <h1>count -{this.state.count}</h1>
        <button onClick={() => this.increment()}> Increment</button>
        <button onClick={() => this.incrementbyfive()}>Incrementby 5</button>
      </div>
    )
  }
}

export default Counter
