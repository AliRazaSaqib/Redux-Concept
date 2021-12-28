/** @format */

import "../../App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Checkout() {
  // get data from redux and show in table
  const getReduxData = useSelector((state) => state.item);
  console.log("checkou", getReduxData);

  // hook for input fields
  const [state, setState] = useState({
    cardName: "",
    cardNumber: "",
  });

  // for handleChange Evenet
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  // for handlesubmit event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Success");
  };

  return (
    <div className="App">
      <div className="app-header d-flex align-items-center justify-content-center">
        CheckOut Product
      </div>
      {/* Product tabel */}
      <div className="checkout-container">
        <table className="checkout-component">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {getReduxData?.itemsList?.data.map((el) => (
              <tr key={el.id}>
                <td>
                  <img
                    src={el.image}
                    style={{ height: "260px", width: "260px" }}
                  />
                </td>
                <td>{el.name}</td>
                <td>{el.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="show-total">Total: {cartTotal}</div> */}
      </div>

      {/* payment section */}
      <form onSubmit={handleSubmit}>
        <div className="payment">
          <h3>Payment Information</h3>
          <div className="add-payment-methods">
            <h6>Payment methods:</h6>
            <div>
              <div>
                <input
                  type="radio"
                  id="visa"
                  name="pay-method"
                  value="visacard"
                />
                 <label htmlFor="visa">Visa Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="master"
                  name="pay-method"
                  value="mastercard"
                />
                 <label htmlFor="master">Master Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="paypal"
                  name="pay-method"
                  value="paypal"
                />
                 <label htmlFor="paypal">Paypal</label>
              </div>
              <br />
            </div>
            <label htmlFor="cardHolderName">Credit Card Name</label>
            <input
              type="text"
              id="cardHolderName"
              placeholder="Card Holder Name"
              className="card-holder-name mt-1"
              required
              name="cardName"
              value={state.cardName}
              onChange={handleChange}
            />
            <label htmlFor="cardnumber" className="mt-3">
              Credit Card Number
            </label>
            <input
              type="text"
              id="cardnumber"
              placeholder="Card Number"
              className="card-holder-name mt-1"
              required
              name="cardNumber"
              value={state.cardNumber}
              onChange={handleChange}
            />

            <label htmlFor="date" className="mt-3">
              Expiry Date
            </label>
            <div className="d-flex gap-2">
              <input
                type="text"
                id="date"
                placeholder="02"
                className="card-holder-name mt-1"
              />
              <input
                type="text"
                id="year"
                placeholder="2022"
                className="card-holder-name mt-1"
              />
              <input
                type="text"
                id="cvc"
                placeholder="CVC"
                className="card-holder-name mt-1"
              />
            </div>
          </div>

          {state.cardName && state.cardNumber ? (
            <button
              type="submit"
              className="mt-4 checkout-button"
              data-bs-toggle="modal"
              data-bs-target="#successMessage"
            >
              Checkout
            </button>
          ) : null}
        </div>
      </form>
      {/* Confermation PopUp */}

      <div
        className="modal fade"
        id="successMessage"
        tabindex="-1"
        aria-labelledby="successMessageLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Thank you for using our services</div>
          </div>
        </div>
      </div>
    </div>
  );
}
