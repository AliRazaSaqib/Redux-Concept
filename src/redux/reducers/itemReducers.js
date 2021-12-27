/** @format */

import { v4 as uuidv4 } from "uuid";
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from "../action/types";

const initialState = {
  items: [
    {
      id: uuidv4(),
      name: "Shirt",
      image: "/img.jpg",
      price: 229,
    },
    {
      id: uuidv4(),
      name: "Pant",
      image: "/pant.jpg",
      price: 350,
    },
    {
      id: uuidv4(),
      name: "Jacket",
      image: "/jacket.jpg",
      price: 1000,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
}
