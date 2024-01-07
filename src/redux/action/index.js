export const  ADDITEM = "ADDITEM"
export const  DELETEITEM = "DELETEITEM"
export const  REMOVEFROMCART = "REMOVEFROMCART"
export const  CLEARCART = "CLEARCART"

// For adding item to the Cart
export const addCart = (product) => {
  return {
    type: ADDITEM,
    payload: product,
  };
};

// For deleting item from the Cart
export const delCart = (product) => {
  return {
    type: DELETEITEM,
    payload: product,
  };
}

export const remCart = (product) => {
  return {
    type: REMOVEFROMCART,
    payload: product,
  };
}

export const clearCart = (product) => {
  return {
    type: CLEARCART,
    payload: product,
  };

};
