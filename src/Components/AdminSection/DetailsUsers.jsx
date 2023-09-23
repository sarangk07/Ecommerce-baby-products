import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { myContext } from '../context/context';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import './Admin.css'

function DetailsUsers() {
  const { id } = useParams();
  const {users} = useContext(myContext);

  console.log(users);
  console.log(id)

  // Check if users is an array
  if (!Array.isArray(users)) {
    return <h1>Invalid data format!</h1>;
  }

  // Find the user with the matching ID
  const viewPerson = users.filter((user) => user.id === parseInt(id));

  if (!viewPerson) {
    return <h1>User not Found!</h1>; // Return the message as JSX
  } else {
    return (
      <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer className="py-5 h-100">


        {viewPerson.map((user)=>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={user.image}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Back
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{user.name }</MDBTypography>
                  <MDBCardText>{user.city}</MDBCardText>
                  
                </div>
                
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">{user.email}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Email</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Product Details</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">{user.product.name}</MDBCardText>
                    <MDBCardText className="font-italic mb-0">{user.product.type}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Price: {user.product.price}</MDBCardText>
                    <MDBCardImage src={user.product.image}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '80px', zIndex: '1' }} />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        )}
      </MDBContainer>
    </div>
    );
  }
}

export default DetailsUsers;
