/** @format */

import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from "../action/types";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    // item.id !== action.payload.id
    case ADD_ITEM:
      return [...state, action.payload];

    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}
