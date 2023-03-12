import React, { useEffect, useState } from "react";
import { Main } from "../Hero/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  CartWrapper,
  CartTable,
  CartButton,
  CartButtonsWrapper,
  PaymentButton,
} from "./styles";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("userID");
  let navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await axios.get(
        `http://localhost/ecommerce-capi/cart_items.php?user_id=${userId}`
      );
      setCartItems(response.data);
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (id) => {
    try {
      const deleteData = {
        data: {
          user_id: userId,
          product_id: String(id),
        },
      };
      console.log(deleteData);
      const response = await axios.delete(
        "http://localhost/ecommerce-capi/remove_from_cart.php",
        deleteData
      );
      if (response.data.status === "success") {
        toast.success(response.data.message);
        setCartItems(cartItems.filter((item) => item.product_id !== id));
      } else {
        toast.error("Falha ao remover o produto do carrinho");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmptyCart = async (id) => {
    const deleteData = {
      data: {
        user_id: userId,
        product_id: String(id),
        delete_all: true,
      },
    };

    try {
      const response = await axios.delete(
        "http://localhost/ecommerce-capi/remove_from_cart.php",
        deleteData
      );
      if (response.data.status === "success") {
        toast.success(response.data.message);
        setCartItems([]);
      } else {
        toast.error("Falha ao esvaziar o carrinho");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      navigate(`/login`);
    }
  }, []);

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
                  <CartButton
                    onClick={() => handleRemoveFromCart(item.product_id)}
                  >
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
            <CartButton onClick={() => handleEmptyCart(1)}>
              Esvaziar Carrinho
            </CartButton>
          </CartButtonsWrapper>
        </div>
      </CartWrapper>
    </Main>
  );
};

export { Cart };
