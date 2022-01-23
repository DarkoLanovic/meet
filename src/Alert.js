import React, { Component } from "react";

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = nll;
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}></p>
        )
    }

}