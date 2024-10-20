import React from "react";
import {useNavigate} from "react-router-dom";
import { useContext } from 'react';
import { myContext } from '../../Components/context/context';

function Search({ searchQuery }) {

  const navigate=useNavigate();
  const { product } = useContext(myContext);
  // const handleSubmit = (val)=>{
  //   navigate(`/View/${val}`)
  // }

  return (
    <div>
      <div className='container'>
      <div className='row'>
      {searchQuery
        ? product
            .filter((val) =>
              val.name.toLowerCase().includes(searchQuery.toLowerCase())
              ||
              val.type.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((val) => (
              <div key={val.id} className="card col-sm-4 m-3" style={{ width: "18rem" }}>
                
                <img
                  src={val.image}
                  className="card-img-top"z
                  alt={val.name}
                  style={{ height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{val.name}</h5>
                  <p class="card-text">{val.details}</p>

                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"> ₹ {val.price}</li>
                  <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                  <button className="addTOCART nav-link" onClick={()=>navigate(`/View/${val.id}`)}>
                    view
                  </button>
                </div>
              </div>
            ))
        : ""}
        </div>
      </div>
    </div>
  );
}

export default Search;
