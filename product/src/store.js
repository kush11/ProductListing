import { logger } from "redux-logger";
import { reducer } from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import {reducerProduct} from './reducerProductList';
import {combineReducers} from 'redux'

export const initialState = {
  data: [],
    name: "",
    image: "",
    price: "",
    quantity: "",
    payment: "",
    productType: "",
    available: "",
    city: []
};

export const productList={
  data:[]
}

export const rootReducer=combineReducers({
  form:reducer,
  product:reducerProduct
})
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
