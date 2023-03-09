import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        num: 0
    }

    increment = () => {
        this.setState({ num: this.state.num + 1 })
    }

    decrement = () => {
        this.setState({ num: this.state.num - 1 })
    }

    Neutral = () => {
        this.setState({ num: 0 })
    }

render() {
    return (
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <h1>Countnting Application</h1>
                <h1 id="num">{this.state.num}</h1>
                <button className="btn btn-success" onClick={this.increment}>Increment</button>
                <button className="btn btn-danger" onClick={this.decrement}>Decrement</button>
                <button className="btn btn-primary" onClick={this.Neutral}>Neutral</button>
            </div>
        </div>
    );
}
}

export default Main;