import {
  EVENT_NAME,
  EVENT_IMAGE,
  EVENT_PRICE,
  EVENT_QUANTITY,
  EVENT_PAYMENT,
  EVENT_PRODUCT_TYPE,
  EVENT_AVAILIBLE_CITY,
  EVENT_NEW_CITY,
  EVENT_PRODUCT_LIST
} from "./action";

import { initialState} from "./store";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case EVENT_NAME:
      return {
        ...state,
        name: action.payload
      };
    case EVENT_IMAGE:
      return {
        ...state,
        image: action.payload
      };
    case EVENT_PRICE:
      return {
        ...state,
        price: action.payload
      };
    case EVENT_QUANTITY:
      return {
        ...state,
        quantity: action.payload
      };
    case EVENT_PAYMENT:
      return {
        ...state,
        payment: action.payload
      };
    case EVENT_PRODUCT_TYPE:
      return {
        ...state,
        productType: action.payload
      };
    case EVENT_AVAILIBLE_CITY:
      return {
        ...state,
        available: action.payload
      };
    case EVENT_NEW_CITY:
      return {
        ...state,
        city: action.payload
      };
    case EVENT_PRODUCT_LIST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
