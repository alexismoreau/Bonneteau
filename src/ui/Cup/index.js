import React, { Component } from 'react';
import './Cup.css';

class Cup extends Component {
    render() {
        return (
            <button
                className="cup"
                onClick={() => this.props.handler(this.props.number)}
            >
                Cup {this.props.number}
            </button>
        );
    }
}

export default Cup;
