import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <label>{this.props.Name}</label>
        )
    }
}

export default Label;

