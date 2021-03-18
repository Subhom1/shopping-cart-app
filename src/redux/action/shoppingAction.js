import { fetchRequest } from "../../utils/httpRequest";
export const FETCH_PRODUCT_LIST = () => (dispatch) => {
  fetchRequest("products").then((resp) => {
    resp &&
      dispatch({ type: "FETCH_PRODUCT_LIST_SUCCESS", payload: resp.data });
  });
};
export const ADD_TO_CART = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});
export const DELETE_FROM_CART = (id) => ({
  type: "DELETE_FROM_CART",
  payload: id,
});
export const REMOVE_COUNT = (id) => ({
  type: "REMOVE_COUNT",
  payload: id,
});
