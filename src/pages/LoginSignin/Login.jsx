import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import { AdminDetails } from "../../Components/AdminSection/Admins";

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Login with username: ${username} and passward: ${password}`);

    // const name = e.target.form1.value;
    // const passward = e.target.form2.value;

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if the user exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (u) => u.username === username && u.password === password
    );

    const admins = AdminDetails.find(
      (u) => u.name == username && u.password == password
    );

    if (user) {
      localStorage.setItem("loggedIn", JSON.stringify(true));
      // localStorage.setItem('loggedIn', 'true');
      alert("Login successful!");

      navigate("/");
    } else if (admins) {
      alert("Welcome Admin");

      navigate("/AdminProduct");
    } else {
      alert("Invalid username or password.");
    }

    setUsername("");

    setPassword("");
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0 d-flex align-items-center">
          <MDBCol md="4">
            <MDBCardImage
              src="https://images.unsplash.com/photo-1567822781105-a80d1b601697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="phone"
              className="rounded-t-5 rounded-tr-lg-0"
              fluid
            />
          </MDBCol>

          <MDBCol md="8">
            <MDBCardBody>
              <MDBInput
                wrapperClass="mb-4"
                label="User Name"
                id="form1"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <Link to="/Signin">Forgot Passward</Link>
              </div>

              <button
                className="btn btn-primary"
                onClick={handleLogin}
                type="submit"
              >
                Login
              </button>
              <br />
              <br />
              <h5>
                Don't Have an Account <Link to="/Signin"> Create one!</Link>
              </h5>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
