import React from 'react';
import { FormGroup, Label } from 'reactstrap';
class Radio extends React.Component {
    render() {
        return (
            <FormGroup>
                <Label>{this.props.label}</Label>
                <div onChange={this.props.onchange}>
                    {/* <CustomInput type="radio" id="card" name="paymentRadio" label="Card"/> */}
                    {/* <CustomInput type="radio" id={this.props.option1} name={this.props.name} label={this.props.option1} /> */}
                    <input type="radio" id={this.props.option1} name={this.props.name} value={this.props.option1} />
                    {this.props.option1}<br/>
                    <input type="radio" id={this.props.option2} name={this.props.name} value={this.props.option2} />
                    {this.props.option2}<br/>
                    <input type="radio" id={this.props.option3} name={this.props.name} value={this.props.option3} />
                    {this.props.option3}                                                             
                </div>
            </FormGroup>
        )
    }
}
export default Radio;