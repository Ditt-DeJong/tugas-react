import React, { Component } from "react";

class Follow extends Component {

    constructor() {
        super()
        this.state = {
            message: "Anjay, Follow dulu cuy"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you guys, Mantap!"
        })
    }

    render() {
        return(
            <div className='btn'>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Follow</button>
            </div>
        )
    }
}

export default Follow