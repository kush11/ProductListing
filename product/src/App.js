import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/UI/Nav'
import Form from './components/UI/Form'
import Axios from './axios';
import ProductList from '../src/components/UI/ProductList'

class App extends Component {
  state={
    productList:[]
  }
  componentDidMount(){
    Axios.get('./productList.json')
    .then(res=>{
      let responseData=[];
      for(let prop in res.data)
      {
        responseData.push({
          id:prop,
          name:res.data[prop].name,
          type:res.data[prop].type,
          imageUrl:res.data[prop].imageUrl,
          price:res.data[prop].price,
          quantity:res.data[prop].quantity,
          payment:res.data[prop].payment
        });        
      }
      this.setState({productList:responseData});
    })
  }

  render() {
    return (
      
      <div className="App" >  
      <Nav/>      
        <div className="row div-1" >        
          <div className="col-6 ProductList" >
            <h3>Form Content</h3>
              <Form/>
          </div>

          <div className="col-6 div-2">
            <h3>Data Content</h3>   
            <ProductList dataList={this.state.productList}/>        
          </div>
        </div>
      </div>

    );
  }
}

export default App;
