import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cup from './ui/Cup';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ballPosition: 1,
        };
        this.shuffleCups = this.shuffleCups.bind(this);
        this.isTheBallHere = this.isTheBallHere.bind(this);
    }

    shuffleCups() {
        this.setState({
            ballPosition: Math.floor(Math.random() * 3) + 1,
        });
    }

    isTheBallHere(cupNumber) {
        if(cupNumber === this.state.ballPosition) {
            alert('you win');
            return this.shuffleCups();
        }
        alert('you loose');
        return this.shuffleCups();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Bonneteau</h1>
                    <button className="shuffleButton" onClick={this.shuffleCups}>
                        Shuffle Cups
                    </button>
                </header>
                <h3>Ball position : {this.state.ballPosition}</h3>
                <Cup number={1} handler={this.isTheBallHere}/>
                <Cup number={2} handler={this.isTheBallHere}/>
                <Cup number={3} handler={this.isTheBallHere}/>
            </div>
        );
    }
}

export default App;
