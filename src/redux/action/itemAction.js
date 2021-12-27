/** @format */

import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "./types";

// export const getItems = () => {
//   return { type: GET_ITEMS };
// };

export const addItems = (productList) => {
  return (dispatch) => dispatch({ type: ADD_ITEM, payload: productList });
};

export const deleteItems = (id) => {
  return (dispatch) => dispatch({ type: DELETE_ITEM, payload: id });
};
