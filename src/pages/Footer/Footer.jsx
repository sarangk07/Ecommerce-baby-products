import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link className='me-4 text-reset'>
            <img src={require('./icons/github.png')} alt="" className='footerIcons'/>
          </Link>
          <Link className='me-4 text-reset'>
            <img src={require('./icons/linkedin.png')} alt="" className='footerIcons'/>
          </Link>
          <Link className='me-4 text-reset'>
            <img src={require('./icons/facebook.png')} alt="" className='footerIcons'/>
          </Link>
          <Link className='me-4 text-reset'>
            <img src={require('./icons/youtube.png')} alt="" className='footerIcons'/>
          </Link>
          <Link className='me-4 text-reset'>
            <img src={require('./icons/twitter.png')} alt="" className='footerIcons'/>
          </Link>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Baby land
              </h6>
              <p>
              Babyland is an online baby store filled with sustainable, organic and adorable goods for your little ones. Your Go-To shopping destination for all things baby!
              We are based in India, Kerala and we offer responsibly-made and eco-friendly baby products at a fair price.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                  <Link to='/Dress' class="nav-link">Kids Wares</Link>
              </p>
              <p>
                  <Link to='/Food' class="nav-link">Food Products</Link>
              </p>
              <p>
                  <Link to='/Toys' class="nav-link">Kids Toys</Link>
              </p>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Information</h6>
              <p>
              <Link className='text-reset'>Feedback</Link> 
              </p>
              <p>
              <Link className='text-reset'>About</Link>
              </p>
              <p>
              <Link className='text-reset'>Terms & Conditions</Link>
              </p>
              <p>
              <Link className='text-reset'>Refund & Return policy</Link>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Keala, pin 675500, India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                babyland@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 885588335
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 885588555
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <Link className='text-reset fw-bold'>BabyLand.com</Link>
      </div>
    </MDBFooter>
  );
 }