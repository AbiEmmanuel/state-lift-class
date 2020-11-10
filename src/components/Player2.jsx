import React, { Component } from 'react'

export default class Player2 extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.props.onPlayer2Change(e.target.value)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.player2} onChange={this.handleChange} />
            </div>
        )
    }
}
