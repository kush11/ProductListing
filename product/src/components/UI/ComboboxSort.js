import React from 'react';
import { FormGroup, Input } from 'reactstrap';
class ComboBox extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="sortCombo" id="sortCombo" onChange = {this.props.onchange}>
                    <option>Sort By Price&Quantity</option>
                    <option id = "PLH">Price : Low to High</option>
                    <option id = "PHL">Price : High to Low</option>
                    <option id = "QLH">Quantity : Low to High</option>
                    <option id = "OHL">Quantity : High to Low</option>
                </Input>
            </FormGroup>
        )
    }
}
export default ComboBox;