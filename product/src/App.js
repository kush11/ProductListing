import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/UI/Nav'
import Form from './components/UI/Form'
import Axios from './axios';
import ProductList from '../src/components/UI/ProductList'
import SortCombo from './components/UI/ComboboxSort'
import FilterCombo from './components/UI/ComboboxFilter'
import FilterPayment from './components/UI/FilterPayment'
import FilterByCity from './components/UI/FilterByCity'
import Footer from './components/UI/Footer'
import Model from './components/Model/Modal'
import Layout from './components/UI/Layout/Layout'

class App extends Component {
  // state = {
  //   data: []
  // }
  // componentDidMount() {
  //   Axios.get('./productList.json')
  //     .then(res => {
  //       let responseData = [];
  //       for (let prop in res.data) {
  //         responseData.push({
  //           id: prop,
  //           name: res.data[prop].name,
  //           type: res.data[prop].type,
  //           imageUrl: res.data[prop].imageUrl,
  //           price: res.data[prop].price,
  //           quantity: res.data[prop].quantity,
  //           payment: res.data[prop].payment,
  //           city: res.data[prop].city
  //         });
  //       }
  //       this.setState({ data: responseData });
  //     })
  //     .catch(error => {
  //       console.log("error from component did mount" + error);
  //     });
  // }

  handleDelete = (e) => {
    const id = e.target.id;
    console.log("Id from delete" + id);
    Axios.delete('./productList/' + id + '.json')
      .then(function (response) {
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      });
  }
  //Sort By Price Low To High
  sortByPriceLH = () => {
    const listByPrice = this.state.data;
    listByPrice.sort((a, b) => { return a.price - b.price })
    this.setState({
      data: listByPrice
    })
  }
  //Sort By Price High to Low
  sortByPriceHL = () => {
    const listByPrice = this.state.data;
    listByPrice.sort((a, b) => { return b.price - a.price })
    this.setState({
      data: listByPrice
    })
  }

  //Sort By Quantity Low To High
  sortByQuantityLH = () => {
    const listByPrice = this.state.data;
    listByPrice.sort((a, b) => { return a.quantity - b.quantity })
    this.setState({
      data: listByPrice
    })
  }

  ////Sort By Quantity High to Low
  sortByQuantityHL = () => {
    const listByPrice = this.state.data;
    listByPrice.sort((a, b) => { return b.quantity - a.quantity })
    this.setState({
      data: listByPrice
    })
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
    const listBy = this.state.data;
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
    this.setState({
      data: result
    })
  }
  // To refresh the page
  // refresh=()=>{
  //   window.location.reload();
  // }
  filterPaymentMode = (e) => {
    const listBy = this.state.data;
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
      this.setState({
        data:result
      })
  }
  filterCityMode=(e)=>{
    const listBy = this.state.data;
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
      this.setState({
        data:result
      })
  }
  render() {
    return (

      <div className="App " >       
        {/* <ProductList dataList={this.state.data} change={this.handleDelete} />  
        <Form />   */}
        <Layout/>
        {/* <div className="row div-1 " >
          <div className="col-4 ProductList" >
            <h3 className="center2">Form Content</h3>
            <Form />           
          </div>

          <div className="col-8 ml-8 div-2">
            <h3 className="center1">Data Content</h3>
            <div className="row mb-2">
              <span className="ml-1 "><SortCombo onchange={this.sortBy} /></span>
              <span className="ml-2 "><FilterCombo onchange={this.filterBy} /></span>
              <span className="ml-2 "><FilterPayment onchange={this.filterPaymentMode} /></span>
              <span className="ml-2 "><FilterByCity onchange={this.filterCityMode} /></span>
            
            </div>
            <ProductList dataList={this.state.data} change={this.handleDelete} />            
          </div>
        </div> */}       
        <Footer/>
      </div>

    );
  }
}

export default App;
