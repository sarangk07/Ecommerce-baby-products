import React from 'react';
import { useState } from 'react';
import {
  // MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import './Signin.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';



function Signin() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

const navigate = useNavigate();

const handleSignup = (e) => {
  e.preventDefault();


  // Validation

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  if (!username || !email || !password ||!repassword) {
    alert('Please fill in all fields!');
    return;
  }
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  if (password !== repassword ){
    alert(`Password Doesn't match`);
    return;
  }
  // if(!passwordRegex.test(password)){
  //   alert(`Password is not secure must include : 
  //           Minimum eight characters, at least one letter and one number`);
  //   return;
  // }

  console.log(`Signup with username: ${username}, email: ${email}, and password: ${password}`);


  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const isUserExists = existingUsers.some((user) => user.username === username);


  if (isUserExists) {
    alert('Username already exists. Please choose a different one.');
    return;
  }



  // Create a new user object and add it to local storage
  
  const newUser = { username, email, password };
  existingUsers.push(newUser);
  localStorage.setItem('users', JSON.stringify(existingUsers));

  setUsername('');
  setEmail('');
  setPassword('');
  setRePassword('');

  navigate('/Login');
};





  return (
    <div className='container-fluid'>
      <Navbar/>
    <MDBContainer className="my-5 ">
       
      <MDBCard>
  
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="login form" className='rounded-start w-100 SigninIMG'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}> Create your account</h5>

                <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg"  value={username}onChange={(e) => setUsername(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email}onChange={(e) => setEmail(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password}onChange={(e) => setPassword(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Retype-Password' id='formControlLg' type='password' size="lg" value={repassword}onChange={(e) => setRePassword(e.target.value)}/>
                <button className='btn btn-primary' onClick={handleSignup} type='submit'>Create</button><br /><br />
              
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              {/* <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p> */}

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>

      </MDBCard>

    </MDBContainer>
    </div>
  );
}

export default Signin;