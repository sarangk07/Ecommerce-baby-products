import React, { useState } from "react";
import { useContext } from "react";
import { myContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import Navbar from "../../pages/Navbar";

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function Cart() {
  const { cart, setCart } = useContext(myContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [card, setCard] = useState("");

  const handleHome = () => {
    navigate("/");
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const countPluse = (id) => {
    const updateCount = cart.map((item) => {
      if (item.id === id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCart(updateCount);
  };

  const countMinuse = (id) => {
    const updateCount = cart.map((item) => {
      if (item.id === id && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCart(updateCount);
  };

  const total = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const handleBuy = () => {
    if (!name && !address && !card) {
      alert("please fill the form");
      return navigate("/");
    }

    navigate("/ThankYou");
  };

  return (
    <>
    <Navbar />
    <div className="container-fluid">
      
      {cart.length > 0 ? (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="h-100 py-5">
            <MDBRow className="justify-content-center align-items-center h-100 ">
              <MDBCol>
                <MDBCard
                  className="shopping-cart"
                  style={{ borderRadius: "15px" }}
                >
                  <MDBCardBody className="text-black">
                    <MDBRow className="row">
                      <MDBCol lg="5" className="px-5 py-4 col-sm-6">
                        <MDBTypography
                          tag="h3"
                          className="mb-5 pt-2 text-center fw-bold text-uppercase"
                        >
                          Payment
                        </MDBTypography>

                        <form className="mb-5">
                          <a href="#!" onClick={handleHome}>
                            <MDBIcon fas icon="angle-left me-2" />
                            Back to shopping
                          </a>
                          <br />
                          <br />
                          <MDBInput
                            label="Name"
                            type="text"
                            size="lg"
                            className="mb-1"
                            onChange={(e) => setName(e.target.value)}
                          />{" "}
                          <br />
                          <MDBInput
                            className="mb-1"
                            label="Address"
                            type="text"
                            size="lg"
                            placeholder="Shipping Address"
                            onChange={(e) => setAddress(e.target.value)}
                          />{" "}
                          <br />
                          <MDBInput
                            className="mb-1"
                            label="Card ID"
                            type="text"
                            size="lg"
                            placeholder="ID"
                            onChange={(e) => setCard(e.target.value)}
                          />{" "}
                          <br />
                          <p className="mb-5">
                            Enter correct address, Shipping will Start Soon
                            After Your Order Confirmed
                            <a href="#!"> Know more</a>.
                          </p>
                          <button
                            className="btn btn-primary"
                            onClick={handleBuy}
                          >
                            Buy now
                          </button>
                          <MDBTypography
                            tag="h5"
                            className="fw-bold mb-5"
                            style={{ position: "absolute", bottom: "0" }}
                          ></MDBTypography>
                        </form>
                      </MDBCol>

                      <MDBCol lg="7" className="px-5 py-4 col-sm-6">
                        <MDBTypography
                          tag="h3"
                          className="mb-5 pt-2 text-center fw-bold text-uppercase"
                        >
                          Your products
                        </MDBTypography>

                        {cart.map((item) => (
                          <div
                            className="d-flex align-items-center mb-5"
                            key={item.id}
                          >
                            <div className="flex-shrink-0">
                              <MDBCardImage
                                src={item.image}
                                fluid
                                style={{ width: "150px" }}
                                alt={item.name}
                              />
                            </div>

                            <div className="flex-grow-1 ms-3 container">
                              <a href="#!" className="float-end text-black">
                                <MDBIcon fas icon="times" />
                              </a>
                              <MDBTypography tag="h5" className="text-primary">
                                {item.name}
                              </MDBTypography>
                              {/* <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                                  Color: {item.color}
                                </MDBTypography> */}

                              <div className="d-flex align-items-center row">
                                <p className="fw-bold mb-0 me-5 pe-3">
                                ₹ {item.price} 
                                </p>
                      
                                <div className="def-number-input number-input safari_only col-sm">
                                  <button
                                  type="button"
                                    style={{ border: "1px" }}
                                    className="minus mx-2 btn btn-secondary"
                                    onClick={() => countMinuse(item.id)}
                                  >
                                    {/* {" "} */}-
                                  </button>
                                  <span>{item.qty} </span>
                                  <button
                                    type="button"
                                    style={{ border: "1px" }}
                                    className="minus mx-2 btn btn-secondary"
                                    onClick={() => countPluse(item.id)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div><br />
                              <MDBTypography tag="h5" className="fw-bold  mx-5">
                                Total:
                              </MDBTypography>
                              <MDBTypography
                                tag="h5"
                                style={{ width: "100px" }}
                                className="fw-bold mx-5 "
                              >
                               ₹ {item.price * item.qty} 
                              </MDBTypography>
                              <button type="button" class="btn btn-outline-danger" onClick={() => removeItem(item.id)}>
                                X
                              </button>
                            </div>
                            <h2>{total}</h2>
                          </div>
                        ))}
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      ) : (
        <div className="emptycartDiv container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={require("./funny-4419254_640.png")}
                alt=""
                className="emptycartIMG"
              />
            </div>
            <div className="col-md-6 headingDiv">
              <h1>Your Cart is Empty</h1>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Cart;
