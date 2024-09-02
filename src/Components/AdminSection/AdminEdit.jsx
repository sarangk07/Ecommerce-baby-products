import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from '../context/context';
import './Admin.css'

function AdminEdit() {
  const { product, setProducts } = useContext(myContext);
  const { id } = useParams();
  const navigate = useNavigate();

 
  const editProduct = product.find((product) => product.id === parseInt(id)) || {
    id: '',
    name: '',
    image: '',
    type: '',
    price: '',
    offerPrice: ''
  };

  const [ids] = useState(editProduct.id.toString());
  const [name, setName] = useState(editProduct.name);
  const [image, setImage] = useState(editProduct.image);
  const [type, setType] = useState(editProduct.type);
  const [price, setPrice] = useState(editProduct.price.toString());
  const [offer, setOffer] = useState(editProduct.offerPrice.toString());

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProducts = {
      id: parseInt(ids),
      name,
      image,
      type,
      price: parseFloat(price),
      offerPrice: parseFloat(offer),
    };

    const updatedProductList = product.map((item) =>
      item.id === updatedProducts.id ? updatedProducts : item
    );

    setProducts(updatedProductList);

    navigate('/AdminProduct');
  };

  return (
    <div className='mainEditDiv container'>
      <h1 className='editH1'>Edit Products</h1>
      <label htmlFor="name" className='labelEdit'>Name</label><br />
      <input
      className='form-control'
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br />
      <label htmlFor="image" className='labelEdit'>Image</label><br />
      <input
      className='form-control'
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      /><br />
      <label htmlFor="type" className='labelEdit'>Type</label><br />
      <input
      className='form-control'
        type="text"
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      /><br />
      <label htmlFor="price" className='labelEdit'>Price</label><br />
      <input
      className='form-control'
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      /><br />
      <label htmlFor="offer" className='labelEdit'>Offer Price</label><br />
      <input
      className='form-control'
        type="text"
        id="offer"
        value={offer}
        onChange={(e) => setOffer(e.target.value)}
      /><br /><br />
      <button onClick={handleSubmit} className='btn btn-success'>Edit</button>
    </div>
  );
}

export default AdminEdit;
