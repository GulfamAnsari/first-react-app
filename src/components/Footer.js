import React, { Component } from 'react';

// class component
export class Footer extends Component {
    constructor() {
        super();
        this.state = {
            message: 'This is a footer click for subcribe..'
        }
    }

    subscribe = () => {
        this.setState({
            message: 'Thannks for subscribing me'
        }, () => {
            console.log(this.state.message);
        })
    }

    render() {
        return <div>
            <p>{this.state.message}</p>
            <button onClick={this.subscribe}>Subscribe</button>
        </div>;
    };
}