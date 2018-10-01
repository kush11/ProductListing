import React from 'react';
import { FormGroup, Input } from 'reactstrap';
class FilterByCity extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="filterCombo" id="filterCombo" onChange = {this.props.onchange}>
                    <option>Filter By City</option>
                    <option id = "Bangalore">City : Bangalore</option>
                    <option id = "Mumbai">City : Mumbai</option>
                    <option id = "Delhi">City : Delhi</option>                   
                </Input>
            </FormGroup>
        )
    }
}
export default FilterByCity;