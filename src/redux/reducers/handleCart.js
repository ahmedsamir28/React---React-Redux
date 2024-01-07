import { ADDITEM, CLEARCART, DELETEITEM, REMOVEFROMCART } from "../action";

const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADDITEM:
      // Check if Product already exists
      const addItem = state.find((el) => el.id === product.id);
      if (addItem) {
        // Increase the quantity
        return state.map((el) =>
          el.id === product.id ? { ...el, qty: el.qty + 1 } : el
        );
      } else {
        const product = action.payload;
        return [...state,{...product,qty: 1,}];
      }
      break;

    case DELETEITEM:
      const deleteItem = state.find((el) => el.id === product.id);
      if (deleteItem.qty === 1) {
        return state.filter((el) => el.id !== deleteItem.id);
      } else {
        return state.map((el) =>
          el.id === product.id ? { ...el, qty: el.qty - 1 } : el
        );
      }
      break;

      case REMOVEFROMCART:
        return state.filter((el)=>el.id !== action.payload.id)

        break;

      case CLEARCART:
        return []

        break;


    default:
      return state;
      break;
  }
};

export default handleCart;
