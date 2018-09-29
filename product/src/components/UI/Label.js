import React, { Component } from 'react';
import Aux from '../../hoc/auxilary/auxilary'

class Label extends Component {
    render() {
        return (
            <Aux>
                <label>{this.props.Name}</label>
            </Aux>
        )
    }
}

export default Label;

