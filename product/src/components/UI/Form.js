import React, { Component } from 'react';
import InputType from './InputType'
import Label from './Label'
import DropDown from './DropDown'
import Button from './Button'
import Radio from './Radio'
import CheckBox from './CheckBox'
import Axios from '../../axios'
import {connect} from 'react-redux'
import {actions} from '../../action'

class Form extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         name: '',
    //         image: '',
    //         price: '',
    //         quantity: '',
    //         payment: '',
    //         productType: '',
    //         available: '',
    //         city: []          
    //     }
    // }
    handelEventName = (e) => {
        this.props.newProductAddHandler(e.target.value);
        // this.setState({ name: e.target.value });
        console.log(this.props.name);
    }
    handelEventImage = (e) => {
        this.props.newImageAddHandler(e.target.value);
        console.log(this.props.image);
    }
    handelEventPrice = (e) => {
        this.props.newPriceAddHandler(e.target.value);
        console.log(this.props.price);
    }
    handelEventQuantity = (e) => {
        this.props.newQuantityAddHandler(e.target.value);
        console.log(this.props.quantity);
    }
    handelEventPaymentRadio = (e) => {
        this.props.newPaymentRadioHandler(e.target.value)
        console.log(this.props.payment);
    }
    handelEventDropDown = (e) => {
        this.props.newProductTypeHandler(e.target.value)
        //this.setState({ productType: e.target.value });
        console.log(this.props.productType);
    }
    resetdata = () => {
        document.getElementById("myForm").reset();

    }

    handelEventCity = (e) => {
        const listCity = e.target.id;
        const isSelected = e.target.checked;
        const list = this.props.city;
        // const list = this.state.city;
        if (isSelected) {
            list.push(listCity)
        }
        else {
            const index = list.indexOf(listCity);
            list.splice(index, 1);
        }
        this.props.newCityHandler(list);
        // this.setState({
        //     city: list
        // })
    }

    //Saving data to Firebase 
    saveData = () => {
        const name = this.props.name;
        const type = this.props.productType;
        const imageUrl = this.props.image;
        const price = this.props.price;
        const quantity = this.props.quantity;
        const payment = this.props.payment;
        const city = this.props.city;
        Axios.post('./productList.json', { name, type, imageUrl, price, quantity, payment,city })
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
            <div className="col-md-12">
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

function mapDispatchToProps(dispatch) {
    return {
      newProductAddHandler(value) {
        dispatch(actions.newProductAdd(value));
      },
      newImageAddHandler(value) {
        dispatch(actions.newImageAdd(value));
      },
      newPriceAddHandler(value) {
        dispatch(actions.newPriceAdd(value));
      },
      newQuantityAddHandler(value) {
        dispatch(actions.newQuantityAdd(value));
      },
      newPaymentRadioHandler(value){
          dispatch(actions.newPaymentRadio(value));
      },
      newProductTypeHandler(value){
          dispatch(actions.newProductType(value));
      },
      newCityHandler(value){
          dispatch(actions.newCity(value));
      }
    };
  }
  

function mapStateToProps(state) {
    return {
        name: state.form.name,
        image: state.form.image,
        price: state.form.price,
        quantity: state.form.quantity,
        payment: state.form.payment,
        productType: state.form.productType,
        available: state.form.available,
        city: state.form.city
    };   
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form);