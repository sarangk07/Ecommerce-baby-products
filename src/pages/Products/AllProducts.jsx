import React from 'react';
// import { productData } from './Products';
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from '../../Components/context/context';
import './AllProducts.css'



function AllProducts() {
 const { product } = useContext(myContext);
  const navigate=useNavigate();


 

  const handleSubmit = (product)=>{
    navigate(`/View/${product}`)
  }
  
  

  return (
    <div className='container'>
      <div className='row '>
        <h2>All Products</h2>
        {product.map((item) => (
          <div class="card col-sm-4 m-3" style={{ width: "18rem" }} key={item.id}>
            <img src={item.image} class="card-img-top CARTimg " alt={item.name} style={{ height: "15rem" }}/>
            <div class="card-body ">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.details}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"> ₹ {item.price}</li>
            </ul>
            
            <div class="card-body">
            <button className='addTOCART nav-link' onClick={() => handleSubmit(item.id)}>View</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
