

export const EVENT_NAME = "EVENT_NAME";
export const EVENT_IMAGE = "EVENT_IMAGE";
export const EVENT_PRICE="EVENT_PRICE";
export const EVENT_QUANTITY="EVENT_QUANTITY";
export const EVENT_PAYMENT='EVENT_PAYMENT';
export const EVENT_PRODUCT_TYPE='EVENT_PRODUCT_TYPE';
export const EVENT_AVAILIBLE_CITY='EVENT_AVAILIBLE_CITY';
export const EVENT_NEW_CITY='EVENT_NEW_CITY';

export const EVENT_PRODUCT_LIST='EVENT_PRODUCT_LIST';

export const ADD_FILTER='ADD_FILTER';

export const actions = {
  newProductAdd(value) {
    return {
      type: EVENT_NAME,
      payload: value
    };
  },
  newImageAdd(value){
    return{
      type:EVENT_IMAGE,
      payload:value
    };
  },
  newPriceAdd(value){
    return{
      type:EVENT_PRICE,
      payload:value
    };
  },
  newQuantityAdd(value){
    return{
      type:EVENT_QUANTITY,
      payload:value
    }
  },
  newPaymentRadio(value){
    return{
      type:EVENT_PAYMENT,
      payload:value
    }
  },
  newProductType(value){
    return{
      type:EVENT_PRODUCT_TYPE,
      payload:value
    }
  },
  newCity(value){
    return{
      type:EVENT_NEW_CITY,
      payload:value
  }
},
newProductList(value){
  return{
    type:EVENT_PRODUCT_LIST,
    payload:value
  }
}

};
