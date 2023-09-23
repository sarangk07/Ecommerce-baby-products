import React from 'react';
import {useNavigate } from 'react-router-dom';
import './AllProducts.css';
import { useContext } from 'react';
import { myContext } from '../../Components/context/context';
import Navbar from '../Navbar';

function Toys() {
  const navigate=useNavigate();
  const { product } = useContext(myContext);

  // Filter the items to display only those with type "toys"
  const toysItems = product.filter(item => item.type === 'toys');

  return (
    <div className='container-fluid'>
      <Navbar/>
      <div className='row'>

        {toysItems.map((item) => (
          <div class="card col-sm-4 m-3" style={{ width: "18rem" }} key={item.id}>
            <img src={item.image} class="card-img-top" alt="..." style={{ height: "15rem" }}/>
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"> ₹ {item.price}</li>
              
              <li class="list-group-item">offer ₹ {item.offerPrice}</li>
            </ul>
            <div class="card-body">
            <button className='addTOCART nav-link' onClick={()=>navigate(`/View/${item.id}`)}>View</button>
              {/* <a href="#" class="card-link">Add to Cart</a>
              <a href="#" class="card-link">Buy now</a> */}
            </div>
          </div>
        ))}


        
      </div>
    </div>
  );
}

export default Toys;
