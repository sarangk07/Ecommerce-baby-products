import React from 'react';
import './ScrollingText.css';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';

export default function Card1() {
  return (
    <MDBCard background='dark' border="none" className='text-white card1'>
    <Link to='/Dress'>
      <MDBCardImage overlay src='https://www.kiddies-kingdom.com/modules/homeslider/images/53ef33b40287c01d3c22e61fae4fbc78.jpg' alt='...' />
      <MDBCardOverlay>
        {/* <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText>
        <MDBCardText>Last updated 3 mins ago</MDBCardText> */}
        
      </MDBCardOverlay>
      </Link>
    </MDBCard>
  );
}