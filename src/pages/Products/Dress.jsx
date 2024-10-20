import React from 'react';
import {useNavigate } from 'react-router-dom';
import './AllProducts.css'
import { useContext } from 'react';
import { myContext } from '../../Components/context/context';
import Navbar from '../Navbar';

function Dress() {
  const navigate=useNavigate();
  const { product } = useContext(myContext);

  const dressItems = product.filter(item => item.type === 'Dress');
  return (
    <div className='container-fluid'>
        <Navbar/>
      <div className='row'>
          <h1 style={{fontFamily:'serif'}}>The Best Places to Buy Cute and Stylish Baby Clothes</h1><br /><br />
         

          {dressItems.map((item) => (
            
          <div class="card col-sm-4 m-3" style={{ width: "18rem" }} key={item.id}>
            <img src={item.image} class="card-img-top" alt={item.name} style={{ height: "15rem" }}/>
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.details}</p>

              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">offer ₹ {item.price}</li>
              
              <li class="list-group-item"> ₹ {item.offerPrice}</li>
            </ul>
            <div class="card-body">
            <button className='addTOCART nav-link' onClick={()=>navigate(`/View/${item.id}`)}>View</button>
              
            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default Dress;