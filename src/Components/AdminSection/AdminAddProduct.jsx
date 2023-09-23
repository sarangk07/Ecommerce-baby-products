import React, { useContext, useState } from 'react';
import { myContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function AdminAdd() {
  const { product, setProducts } = useContext(myContext);
  const navigate = useNavigate();

  
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [offer, setOffer] = useState('');
  const [qty] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if  fields are filled
    if (!name || !image || !type || !price || !offer) {
      alert('Please fill in all fields.');
      return;
    }

    const updatedProducts = {
      name,
      image,
      type,
      price: parseFloat(price),
      offerPrice: parseFloat(offer),
      id: product.length + 2, // Assign a new ID
      qty:parseInt(qty)
    };

    // Add the new product to the products list
    setProducts([...product, updatedProducts]);

    // Reset the input fields
    setName('');
    setImage('');
    setType('');
    setPrice('');
    setOffer('');

    
    navigate('/AdminProduct');
  };

  return (
    <div className='mainEditDiv container'>
      <h1 className='editH1'>Add new products</h1>

      <label htmlFor='name' className='labelEdit'>
        Name
      </label>
      <br />
      <input
        type='text'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='form-control'
        required
      />
      <br />
      <label htmlFor='image' className='labelEdit'>
        Image
      </label>
      <br />
      <input
        type='text'
        id='image'
        placeholder='Image address or path'
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className='form-control'
        required
      />
      <br />
      <label htmlFor='type' className='labelEdit'>
        Type
      </label>
      <br />
      <input
        type='text'
        id='type'
        placeholder='eg(toys,Dress,Food,Others)'
        value={type}
        onChange={(e) => setType(e.target.value)}
        className='form-control'
        required
      />
      <br />
      <label htmlFor='price' className='labelEdit'>
        Price
      </label>
      <br />
      <input
        type='number'
        id='price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className='form-control'
        required
      />
      <br />
      <label htmlFor='offer' className='labelEdit'>
        Offer Price
      </label>
      <br />
      <input
        type='number'
        id='offer'
        value={offer}
        onChange={(e) => setOffer(e.target.value)}
        className='form-control'
        required
      />
      <br />
      <br />
      <button onClick={handleSubmit} className='btn btn-primary'>Add</button>
      <br />
      <br />
      {/* <button onClick={() => navigate('/AdminProduct')}>Finish</button>
      <br /> */}
    </div>
  );
}

export default AdminAdd;
