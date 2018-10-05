
import {EVENT_PRODUCT_LIST} from './action'
import { productList} from "./store";

export function reducerProduct(state=productList, action) {
  switch (action.type) {
    case EVENT_PRODUCT_LIST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}