import React from 'react';
import CartItem from './cartItem';
import './Cart.css';

const Cart = ({ items, totalCost, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {items.map(item => (
            <CartItem
              key={item.title}
              img={item.img}
              title={item.title}
              count={item.count}
              newPrice={item.newPrice}
              onIncrement={() => onIncrement(item)}
              onDecrement={() => onDecrement(item)}
              onDelete={() => onDelete(item)}
            />
          ))}
          <div className="total-cost">
            <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
