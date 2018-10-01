import React from 'react';
import { FormGroup, Input } from 'reactstrap';
class ComboBox extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="filterCombo" id="filterCombo" onChange = {this.props.onchange}>
                    <option>Filter By Product</option>
                    <option id = "Fruits">ProductType : Fruits</option>
                    <option id = "Vegitable">ProductType : Vegitable</option>
                    <option id = "Electronics">ProductType : Electronics</option>                   
                </Input>
            </FormGroup>
        )
    }
}
export default ComboBox;