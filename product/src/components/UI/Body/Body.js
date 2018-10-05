import React, { Component } from "react";
import ProductList from "../ProductList";
import Axios from "../../../axios";
import Form from "../Form";
import { connect } from "react-redux";
import { actions } from "../../../action";

import SortCombo from "../../UI/ComboboxSort";
import FilterCombo from "../../UI/ComboboxFilter";
import FilterPayment from "../../UI/FilterPayment";
import FilterByCity from "../../UI/FilterByCity";
import App from '../../../App'

class Body extends Component {
  // state = {
  //     data: []
  // }
 //Sort By Price Low To High
 sortByPriceLH = () => {
    let listByPrice = this.props.data;
    console.log("before"+listByPrice)
    listByPrice.sort((a, b) => { return a.price - b.price })
    // this.setState({
    //   data: listByPrice
    // })
    console.log("after"+listByPrice)
    this.props.newProductListEvent(listByPrice)
  }
  //Sort By Price High to Low
  sortByPriceHL = () => {
     
    let listByPrice = this.props.data;
    console.log("before"+listByPrice)
    listByPrice.sort((a, b) => { return b.price - a.price })
    // this.setState({
    //   data: listByPrice
    // })
    console.log("after"+listByPrice)
    this.props.newProductListEvent(listByPrice)
  }

  //Sort By Quantity Low To High
  sortByQuantityLH = () => {
    let listByPrice = this.props.data;
    listByPrice.sort((a, b) => { return a.quantity - b.quantity })
    // this.setState({
    //   data: listByPrice
    // })
    this.props.newProductListEvent(listByPrice)
  }

  ////Sort By Quantity High to Low
  sortByQuantityHL = () => {
    let listByPrice = this.props.data;
    listByPrice.sort((a, b) => { return b.quantity - a.quantity })
    // this.setState({
    //   data: listByPrice
    // })
    this.props.newProductListEvent(listByPrice)
  }
  sortBy = (e) => {
    const sorter = e.target.value;
    if (sorter === "Price : High to Low")
      this.sortByPriceHL();
    else if (sorter === "Price : Low to High")
      this.sortByPriceLH();
    else if (sorter === "Quantity : High to Low")
      this.sortByQuantityHL();
    else
      this.sortByQuantityLH();
  }

  filterBy = (e) => {
    const listBy = this.props.data;
    const filter = e.target.value;
    let result = [];
    if (filter === "ProductType : Fruits")
      result = listBy.filter((a) => { return a.type === "Fruits" })
    else if (filter === "ProductType : Vegitable")
      result = listBy.filter((a) => { return a.type === "Vegitable" })
    else if (filter === "ProductType : Electronics")
      result = listBy.filter((a) => { return a.type === "Electronics" })
    else
      this.componentDidMount()
    // this.setState({
    //   data: result
    // })
    this.props.newProductListEvent(result);
  }
  filterPaymentMode = (e) => {
    const listBy = this.props.data;
    const filter = e.target.value;
    let result = [];
    if (filter === "Payment : COD")
      result = listBy.filter((a) => { return a.payment === "COD" })
    else if (filter === "Payment : Online")
      result = listBy.filter((a) => { return a.payment === "Online" })
    else if (filter === "Payment : Both")
      result = listBy.filter((a) => { return a.payment === "Both" })
      else
      this.componentDidMount()
    //   this.setState({
    //     data:result
    //   })
    this.props.newProductListEvent(result);
  }
  filterCityMode=(e)=>{
    const listBy = this.props.data;
    const filter = e.target.value;
    let result = [];
    if (filter === "City : Bangalore")
      result = listBy.filter((a) => { return a.city.includes("Bangalore") })
    else if (filter === "City : Mumbai")
      result = listBy.filter((a) => { return a.city.includes("Mumbai") })
    else if (filter === "City : Delhi")
      result = listBy.filter((a) => { return a.city.includes("Delhi") })
      else
      this.componentDidMount()
    //   this.setState({
    //     data:result
    //   })
    this.props.newProductListEvent(result);
  }

  componentDidMount() {
    Axios.get("./productList.json")
      .then(res => {
        let responseData = [];
        for (let prop in res.data) {
          responseData.push({
            id: prop,
            name: res.data[prop].name,
            type: res.data[prop].type,
            imageUrl: res.data[prop].imageUrl,
            price: res.data[prop].price,
            quantity: res.data[prop].quantity,
            payment: res.data[prop].payment,
            city: res.data[prop].city
          });
        }
        //this.setState({ data: responseData });
        this.props.newProductListEvent(responseData);
      })
      .catch(error => {
        console.log("error from component did mount" + error);
      });
  }
  handleDelete = e => {
    const id = e.target.id;
    console.log("Id from delete" + id);
    Axios.delete("./productList/" + id + ".json")
      .then(function(response) {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div className="row ml-4 mr-4">
          <SortCombo onchange={this.sortBy}/>
          <FilterCombo onchange={this.filterBy}/>
          <FilterPayment onchange={this.filterPaymentMode} />
          <FilterByCity onchange={this.filterCityMode}/>
        </div>
        <ProductList dataList={this.props.data} change={this.handleDelete} />
        {/* <div className="row col-md-12">
                <Form/>
                </div> */}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    newProductListEvent(value) {
      dispatch(actions.newProductList(value));
    }
  };
}

function mapStateToProps(state) {
  return {
    data: state.product.data
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
