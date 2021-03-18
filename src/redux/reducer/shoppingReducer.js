let initState = {
  sucess_msg: "",
  products: [],
  cart: [],
  cart_count: 0,
};
export const shoppingReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_LIST_SUCCESS":
      return {
        ...state,
        products: action.payload,
        sucess_msg: "Product Fetched",
      };
    case "ADD_TO_CART":
      let exist = false;
      let cart = state.cart.map((i) => {
        if (i.id === action.payload.id) {
          exist = true;
          return { ...i, count: i.count + 1 };
        } else {
          return i;
        }
      });
      return {
        ...state,
        cart:
          state.cart.length && exist ? cart : [...state.cart, action.payload],
        cart_count: state.cart_count + 1,
      };
    case "DELETE_FROM_CART":
      let itemCount = state.cart.find((i) => i.id === action.payload).count;
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload),
        cart_count: state.cart_count - itemCount,
      };
    case "REMOVE_COUNT":
      let cart2 = state.cart.map((i) => {
        if (i.id === action.payload) {
          return { ...i, count: i.count - 1 };
        } else {
          return i;
        }
      });
      return {
        ...state,
        cart: cart2,
        cart_count: state.cart_count - 1,
      };
    default:
      return state;
  }
};
