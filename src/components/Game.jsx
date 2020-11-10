import React, { Component } from 'react';
import Player1 from './Player1';
import Player2 from './Player2'

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state={
            player1: '',
            player2: ''
        }
    }

    player1Changed = (res) => {
        this.setState({player1: res})
    }

    player2Changed = (res) => {
        this.setState({player2: res})
    }

    render() {
        return (
            <div>
                <div>
                    <span>Greetings almighty hero ! What is your name</span>
                    <Player1 player1={this.state.player1} onPlayer1Change={this.player1Changed} />
                </div>
                <div>
                    <span>Ohhhh, we got another fighter ! Introduce yourself !</span>
                    <Player2 player2={this.state.player2} onPlayer2Change={this.player2Changed} />
                </div>
                <h2>{this.state.player1} VS. {this.state.player2}</h2>
            </div>
        )
    }
}
