/** @format */

import "../../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItems } from "../../redux/action/itemAction";

export default function List() {
  //get the data from redux instead context-api
  const dispatch = useDispatch();
  const getItems = useSelector((state) => state.item.items);
  const [items, setSelectedItems] = useState([]);

  console.log("items", items);

  // add item to cart
  const addSelected = (el) => {
    setSelectedItems([...items, el]);
  };

  // remove item from card
  const handleRemove = (id) => {
    dispatch(deleteItems(id));
    console.log("selected item id:", id);
  };

  return (
    <div className="App">
      <div className="app-header d-flex align-items-center justify-content-center">
        Add To List
      </div>

      <div className="add-list-container">
        {getItems.map((el) => {
          return (
            <div key={el.id} className="d-flex align-items-center items">
              <div>{el.name}</div>
              <img src={el.image} />
              <div>Pkr.{el.price}</div>
              <button className="mt-3" onClick={() => addSelected(el)}>
                Add to list
              </button>
            </div>
          );
        })}
      </div>

      {items.length > 0 ? (
        <div className="view-added-items">
          <div className="app-header d-flex align-items-center justify-content-center">
            Product List
          </div>
          <table>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((el) => (
                <tr key={el.id}>
                  <td>
                    <img
                      src={el.image}
                      style={{ height: "260px", width: "260px" }}
                    />
                  </td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>
                    <button className="delete" onClick={handleRemove}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex align-items-end justify-content-end">
            <Link to="/checkout">
              <button className="checkout">Checkout</button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
