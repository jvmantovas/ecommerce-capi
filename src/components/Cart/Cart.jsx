import React, { useState } from "react";
import { Main } from "../Hero/styles";
import {
  CartWrapper,
  CartTable,
  CartButton,
  CartButtonsWrapper,
  PaymentButton,
} from "./styles";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Produto 1", price: 10, quantity: 2 },
    { id: 2, name: "Produto 2", price: 15, quantity: 1 },
    { id: 3, name: "Produto 3", price: 20, quantity: 3 },
  ]);

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleEmptyCart = () => {
    setCartItems([]);
  };

  return (
    <Main style={{ backgroundColor: "#f6d53b" }}>
      <CartWrapper>
        <h2>Carrinho</h2>
        <CartTable>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>R${item.price}</td>
                <td>{item.quantity}</td>
                <td>R${item.price * item.quantity}</td>
                <td className="remove-td">
                  <CartButton onClick={() => handleRemoveFromCart(item.id)}>
                    Remover
                  </CartButton>
                </td>
              </tr>
            ))}
          </tbody>
        </CartTable>
        <div>
          <h3>
            Total: R$
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </h3>
          <CartButtonsWrapper>
            <PaymentButton>Prosseguir para pagamento</PaymentButton>
            <CartButton onClick={handleEmptyCart}>Esvaziar Carrinho</CartButton>
          </CartButtonsWrapper>
        </div>
      </CartWrapper>
    </Main>
  );
};

export { Cart };
