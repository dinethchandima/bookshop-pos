import React from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './POS.css';

const ProductPage = () => {
  const navigate = useNavigate();

  const handleCart = (e) => {
    navigate("/bill");
    e.preventDefault();
    console.log('Cart clicked');
  };

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 20,
      imageUrl: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="product-page">
      <div className="top-bar">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
        <select className="filter-select">
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
        <button className="cart-button" onClick={handleCart}><AiOutlineShoppingCart /></button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-header">iPhone 14</div>
            <div className="card-subtitle">{product.name}</div>
            <img src={product.imageUrl} alt={product.name} className="card-img" />
            <div className="card-details">
              <button className="add-to-cart-button">
                <span className="price">${product.price}</span>
                <span className="add-to-cart-icon">+</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
