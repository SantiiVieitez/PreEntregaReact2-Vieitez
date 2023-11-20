import React from 'react';
import './CartWidget.css';
import carritoImage from './carrito2.png';
import Count from '../Count/Count';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img className="imagen-carrito" src={carritoImage} alt="comida" />
      <Count initial = {1} stock = {10}/>

    </div>
  );
};

export default CartWidget;