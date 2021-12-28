/** @format */

import "../../App.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItems, deleteItems } from "../../redux/action/itemAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function List() {
  // react-tostify
  const notify = () =>
    toast("Your item successfully deleted", { autoClose: false });
  //get the data from redux instead context-api
  const dispatch = useDispatch();
  const getItems = useSelector((state) => state.item);
  const [itemss, setSelectedItemss] = useState([]);

  // list of items
  const items = [
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
  ];

  // add item to cart
  const addSelected = (el) => {
    const data = items.filter((it) => it.id === el.id);
    let temp = [...itemss, el];
    dispatch(addItems({ data: [...itemss, el] }));
    setSelectedItemss([...itemss, el]);
  };

  // remove item from card
  const handleRemove = (id) => {
    let temp = getItems;
    let filteredItem = getItems.itemsList.data.filter(
      (item, index) => item.id !== id
    );
    temp.itemsList.data = filteredItem;
    dispatch(deleteItems({ data: [...filteredItem] }));

    setTimeout(() => {
      notify();
    }, 1000);
  };

  return (
    <div className="App">
      <div className="app-header d-flex align-items-center justify-content-center">
        Add To List
      </div>
      <ToastContainer className="tostify" />
      <div></div>
      <div className="add-list-container">
        {items.map((el) => {
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

      {itemss.length > 0 ? (
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
              {getItems?.itemsList?.data.map((el) => (
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
                    <button
                      className="delete"
                      onClick={() => handleRemove(el.id)}
                    >
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
