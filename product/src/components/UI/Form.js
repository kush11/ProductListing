import React, { Component } from 'react';
import InputType from './InputType'
import Label from './Label'
import DropDown from './DropDown'
import Button from './Button'
import Radio from './Radio'
import CheckBox from './CheckBox'
import Axios from '../../axios'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            image: '',
            price: '',
            quantity: '',
            payment: '',
            productType: '',
            available: '',
            city: []          
        }
    }
    handelEventName = (e) => {
        this.setState({ name: e.target.value });
        console.log(this.state.name);
    }
    handelEventImage = (e) => {
        this.setState({ image: e.target.value });
        console.log(this.state.image);
    }
    handelEventPrice = (e) => {
        this.setState({ price: e.target.value });
        console.log(this.state.price);
    }
    handelEventQuantity = (e) => {
        this.setState({ quantity: e.target.value });
        console.log(this.state.quantity);
    }
    handelEventPaymentRadio = (e) => {
        this.setState({ payment: e.target.value });
        console.log(this.state.payment);
    }
    handelEventDropDown = (e) => {
        this.setState({ productType: e.target.value });
        console.log(this.state.productType);
    }
    resetdata = () => {
        document.getElementById("myForm").reset();

    }

    handelEventCity = (e) => {
        const listCity = e.target.id;
        const isSelected = e.target.checked;
        const list = this.state.city;
        if (isSelected) {
            list.push(listCity)
        }
        else {
            const index = list.indexOf(listCity);
            list.splice(index, 1);
        }
        this.setState({
            city: list
        })
    }

    //Saving data to Firebase 
    saveData = () => {
        const name = this.state.name;
        const type = this.state.productType;
        const imageUrl = this.state.image;
        const price = this.state.price;
        const quantity = this.state.quantity;
        const payment = this.state.payment;
        const city = this.state.city;
        Axios.post('./productList.json', { name, type, imageUrl, price, quantity, payment, city })
            .then(response => {
                console.log(response);
                window.location.reload();
            }
            )
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <form id="myForm" className="addProductForm">
                    <Label Name="Product Name" />
                    <InputType Name="Enter Product Name" Value="text" change={this.handelEventName} />
                    <Label Name="Product Type" />

                    <DropDown onchange={this.handelEventDropDown} />

                    <Label Name="Image Url" />
                    <InputType Name="Enetr Image Url" Value="text" change={this.handelEventImage} />

                    <Label Name="Product Price" />
                    <InputType Name="Enter Price" Value="number" change={this.handelEventPrice} />

                    <Label Name="Product Quantity" />
                    <InputType Name="Enter Quantity" Value="number" change={this.handelEventQuantity} />
                    <div className="row ">
                        <div className="col-6">
                            <CheckBox name="paymentCheckBox" label="Avaliability" option1="Bangalore" option2="Mumbai" option3="Delhi" changed={this.handelEventCity} /><br />
                        </div>
                        <div className="col-6">
                            <Radio name="paymentRadio" label="Payment Mode" option1="COD" option2="Online" option3="Both" onchange={this.handelEventPaymentRadio} /><br />
                        </div>
                    </div>
                    <Button Name="Submit" onclicked={this.saveData}  />
                    <Button Name="Reset" onclicked={this.resetdata} />
                </form>
            </div>
        )
    }
}

export default Form;