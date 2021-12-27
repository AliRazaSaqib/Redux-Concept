/** @format */

import { GET_ITEMS, DELETE_ITEM } from "./types";

export const getItems = () => {
  return { type: GET_ITEMS };
};

export const deleteItems = (id) => {
  return (dispatch) => dispatch({ type: DELETE_ITEM, payload: id });
};
