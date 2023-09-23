import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { myContext } from "../context/context";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import './Cart.css'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function View() {
  const { id } = useParams();
  const { product, cart, setCart } = useContext(myContext);
  const navigate = useNavigate();


  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login status

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  //filter
  const viewProduct = product.filter(
    (products) => products.id === parseInt(id)
  );

  if (!viewProduct) {
    return <h1>Product not found</h1>;
  }


  const addToCart = () => {
    if (cart.includes(viewProduct[0])) {
      alert("item already added!");
    } else {
      if (isLoggedIn) {
        setCart(() => [...cart, ...viewProduct]);
      }
    }
    navigate("/Cart");
  };


  return (
    <div className="container-fluid ">
      <Navbar />
      {viewProduct.map((item) => (
        <MDBRow key={item.id} className="viewRow row ">
          <MDBCol md="6" className="col-6-md">
            <MDBCard className="imgView">
              <MDBCardImage src={item.image} alt={viewProduct.name} className="img"/>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="col-6">
            <MDBCard className="detailsView">
              <MDBCardBody>
                <MDBCardTitle>{item.name}</MDBCardTitle>
                <MDBCardText>{item.description}</MDBCardText>
                <MDBCardText>
                  <strong>Price:</strong> ₹{item.price}
                </MDBCardText>
      
                {isLoggedIn === true ? (
                  <button onClick={addToCart} className="btn btn-primary">add to cart</button>
                ) : (
                  <button
                    onClick={() => {
                      navigate("/login");
                      
                    }}
                    className="btn btn-primary"
                  >
                    add to cart
                  </button>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      ))}
    </div>
  );
}

export default View;
