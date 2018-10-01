import React, { Component } from 'react';

import { Button } from 'reactstrap'
class Button1 extends Component {
    render() {
        return (

            <Button onClick={this.props.onclicked} class="btn" type="button">{this.props.Name}</Button>
        )
    }
}

export default Button1;

