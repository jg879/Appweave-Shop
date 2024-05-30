import React from 'react';
import { IoMdAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';
import './cartItem.css';

const CartItem = ({ img, title, count, newPrice, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} className="cart-item-img" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{title}</h3>
        <div className="cart-item-quantity">
          <IoIosRemoveCircleOutline onClick={onDecrement} className="quantity-icon" />
          <span className="quantity">{count}</span>
          <IoMdAddCircleOutline onClick={onIncrement} className="quantity-icon" />
        </div>
        <div className="cart-item-price">${(newPrice * count).toFixed(2)}</div>
        <button className="delete-button" onClick={onDelete}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
