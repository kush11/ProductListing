import React from 'react';
import { FormGroup, Input } from 'reactstrap';
class FilterPayment extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="sortCombo" id="sortCombo" onChange = {this.props.onchange}>
                    <option>Sort By Paynent </option>
                    <option id = "COD">Payment : COD</option>
                    <option id = "Online">Payment : Online</option>
                    <option id = "Both">Payment : Both</option>                    
                </Input>
            </FormGroup>
        )
    }
}
export default FilterPayment;