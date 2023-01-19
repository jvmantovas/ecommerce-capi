import React, { useState } from "react";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15, quantity: 1 },
    { id: 3, name: 'Product 3', price: 20, quantity: 3 },
  ]);

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleEmptyCart = () => {
    setCartItems([]);
  };

  return (
    <CartWrapper>
      <h2>Cart</h2>
      <CartTable>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
              <td>
                <CartButton onClick={() => handleRemoveFromCart(item.id)}>Remove</CartButton>
              </td>
  );
};

export { Cart };
