import React from "react";
import { Link } from "react-router-dom";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Catogary() {
  return (
    <div className="container">
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard className="h-100">
            <Link to="/toys" class="nav-link">
              <MDBCardImage
                src="https://img.freepik.com/free-photo/set-children-toys_93675-130772.jpg?w=826&t=st=1694491961~exp=1694492561~hmac=0b7a3a9430a984064d44681449f5ba8faec66c1cac6f1fa12c127636b4e16bb5"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Toys</MDBCardTitle>
                <MDBCardText>
                  Playtime Delights: Discover Our Range of Engaging Baby Toys!,
                  Smiles, Giggles, and Fun, Explore Our Adorable Baby Toy
                  Collection.For Little Explorers: Stimulate Your Baby's
                  Senses with Our Toys.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </Link>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <Link to="/Dress" class="nav-link">
              <MDBCardImage
                src="https://img.freepik.com/free-vector/baby-clothes-set_74855-202.jpg?w=740&t=st=1694492073~exp=1694492673~hmac=502900d1acacbb0518fb596b5b18b6cc79b436f6a9bce836a50e2465e17f02f5"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Dress</MDBCardTitle>
                <MDBCardText>
                  Dress Your Little One in Style! Explore Our Adorable Baby
                  Dresses Collection Today, Cuteness Overload: Shop Our Trendy
                  Baby Dresses for Your Bundle of Joy!, Dress Your Baby in Love
                  and Fashion with Our Charming Baby Dresses.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </Link>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <Link to="/Food" class="nav-link">
              <MDBCardImage
                src="https://img.freepik.com/free-photo/view-baby-food-bowls_23-2148580378.jpg?w=740&t=st=1694491831~exp=1694492431~hmac=1d4d9d9e4ff091e162569a72b4fc13b2b1461a5d8ad2534d773487d48455f033"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Feedings</MDBCardTitle>
                <MDBCardText>
                  Nourishing Little Tummies, Explore Our Range of Healthy Baby
                  Foods!,Delicious and Nutritious, Baby Foods Designed for
                  Growing Smiles.Baby's First Bites, Discover Our Wholesome
                  and Tasty Baby Food Selection.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardFooter>
            </Link>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* <div className='container'>
      <div className="row">
        <div className="col">
        <img src="https://target.scene7.com/is/image/Target/GUEST_7dc11d77-0ae1-47b9-8508-decd303d0f08?fmt=webp&amp;qlt=80&amp;wid=1100" alt="Baby Month Deals" loading="eager"/>
        </div>
      </div>
    </div> */}
    </div>
  );
}
