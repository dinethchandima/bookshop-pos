import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GoodReceive.css';

const GoodReceive = () => {
  const [items, setItems] = useState([]); // State to store items fetched from the database

  // Fetch items from the database
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/items'); // Fetch all items
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []); // Fetch only once when the component loads

  return (
    <div className="good-receive">
      <div className="content-box11">
        <h2>Bill</h2>

        {/* Table to Display Items */}
        <table className="product-table11">
          <thead>
            <tr>
              <th>ID</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Barcode</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.barcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoodReceive;
