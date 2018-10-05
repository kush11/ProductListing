import React, { Component } from 'react';

class DropDown extends Component {
    render() {
        return (
            <select class="form-control" onChange={this.props.onchange} >
                <option value="selected" selected>---Select---</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetable">Vegetable</option>
                <option value="Electronics">Electronics</option>
            </select>
        )
    }
}

export default DropDown;
