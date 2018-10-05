import React from 'react';

const ProductList = (props) => {
    const listOfProducts = props.dataList.map(appn => {
        return (
            <div className="col-md-5 float-left card mb-1 mr-2" key={appn.id}>
                <div className="figure">
                    <div className="row">
                        <div className="col-4">
                            <img className="img-thumbnail" alt={appn.name} src={appn.imageUrl} height="200px" width="200px" style={{ float: "left", margin: "5px" }} />
                        </div>
                        <div className="col-8" >
                           <button className="close" id={appn.id} onClick={props.change}>X</button>
                            <span className="card-body">
                                <h4> Product Name : {appn.name}</h4>
                                <p> Product Type : {appn.type}</p>
                                <p> Product Price : {appn.price} $</p>
                                <p> Product Quantity : {appn.quantity}</p>
                                <p> Payment Mode : {appn.payment}</p>
                                <p> Cities : <ul><li>{appn.city}</li>                                            </ul>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
    return <div>{listOfProducts}</div>;
}
export default ProductList;