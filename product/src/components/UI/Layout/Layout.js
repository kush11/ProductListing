import React, { Component } from 'react'
import Nav from '../Nav'
import Form from '../Form'
import ProductList from '../ProductList'
import Axios from '../../../axios';



import Body from '../Body/Body'

class Layout extends Component {

    render() {
        return (
            <div>                
                    <Nav />
                    
                    <div className="row">                  
                    {/* <Body /> */}
                    {/* <div className="col-4 ProductList" >
                    <h3 className="center2">Form Content</h3>
                    <ProductList dataList={this.state.data} change={this.handleDelete} />
                </div>
                <div className="col-8 ml-8 div-2">
                    <h3 className="center1">Data Content</h3>
                    <Form />
                </div> */}
                </div>
            </div>
        )
    }
}
export default Layout;
