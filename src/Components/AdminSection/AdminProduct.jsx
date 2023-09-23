import React from 'react';
import { useContext } from 'react';
import { myContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

function AdminProduct() {
  const { product, setProducts } = useContext(myContext);
  const navigate = useNavigate();

  const removeItem = (itemId) => {
    const updatedCart = product.filter((item) => item.id !== itemId);
    setProducts(updatedCart);
  };

  const handleEdit = (productId) => {
    navigate(`/AdminEdit/${productId}`);
  };

  const handleADD = () => {
    navigate('/AdminAdd');
  };

  return (
    <div>
      <AdminNavbar />
      <div className='container mt-4'>
        <h3 className='mb-4'>Products</h3>
        <button
          onClick={handleADD}
          className='btn btn-success mb-4'
          style={{ borderRadius: '5px' }}
        >
          Add Items
        </button>
        <div className='table-responsive'>
          <table className='table table-bordered table-striped'>
            <thead className='table-dark'>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Category</th>
                <th>Price</th>
                <th>Offer Price</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody className='row-md'>
              {product.map((products) => (
                <tr key={products.id}>
                  <td>{products.id}</td>
                  <td>
                    <h6 className='card-title'>{products.name}</h6>
                  </td>
                  <td>
                    <img
                      src={products.image}
                      className='card-img-top'
                      alt='...'
                      style={{ height: '3rem', width: '3rem' }}
                    />
                  </td>
                  <td>
                    <p className='card-text'>{products.type}</p>
                  </td>
                  <td>₹ {products.price}</td>
                  <td>₹ {products.offerPrice}</td>
                  <td>
                    <img src="https://imgs.search.brave.com/H5UDlraxzigteqS0QhSHz6dwckD4jNiPh0E0nRkpWE0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9v/YmplY3QvbHVjcS1i/YWNrc3RhZ2UvZWRp/dC00NS5wbmc"  width={30}  alt="" onClick={() => handleEdit(products.id)} />&nbsp;&nbsp;
                    <img src="https://imgs.search.brave.com/wTON4k3A8PoSVdACXuynci365cwVKk_u5zDZ4YIwcTk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMzQwNS8zNDA1/MjQ0LnBuZw" width={30} alt="" onClick={() => removeItem(products.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
