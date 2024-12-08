import './Products.css';
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [formData, setFormData] = useState({
    item_id: '',
    item_name: '',
    category_id: '',
    price: '',
    barcode: '',
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/add-item', formData);
      alert(response.data); // Display success message
      setFormData({ item_id: '', item_name: '', category_id: '', price: '', barcode: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form');
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Products</h2>
      <form onSubmit={handleSubmit}>
        <div className="column">
          <div className="form-group1">
            <label htmlFor="item_id">Item ID:</label>
            <input
              type="text"
              id="item_id"
              placeholder="Item ID"
              value={formData.item_id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="item_name">Item Name:</label>
            <input
              type="text"
              id="item_name"
              placeholder="Item Name"
              value={formData.item_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="category_id">Category ID:</label>
            <input
              type="text"
              id="category_id"
              placeholder="Category ID"
              value={formData.category_id}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="column">
          <div className="form-group1">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="barcode">SKU (Barcode):</label>
            <input
              type="text"
              id="barcode"
              placeholder="SKU"
              value={formData.barcode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="delete-button">
          <FaTrash />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Products;
