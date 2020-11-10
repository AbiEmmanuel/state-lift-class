import React, { Component } from 'react'

export default class Player1 extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.props.onPlayer1Change(e.target.value)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.player1} onChange={this.handleChange} />
            </div>
        )
    }
}
