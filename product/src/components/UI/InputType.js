import React, { Component } from 'react';
class InputType extends Component {
      
    render() {
        return (
           
                <input class="form-control" type={this.props.Value} id="input" placeholder={this.props.Name} onChange={this.props.change}></input>            
        )
    }
}

export default InputType;

