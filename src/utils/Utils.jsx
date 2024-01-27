import React from 'react'
import './Utils.scss'
import { PiShoppingCartSimple } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";

const Container = ({children}) => {
  return (
    <div className='container'>{children}</div>
  )
}

const Button = ({children}) => {
  return (
    <button className='btn'>{children}</button>
  )
}

const Card = () => {
  return (
    <div className="card">
      <img src="../../../Market-place-products.png" alt="" />
      <div className="hover-look">
        <span>
          <PiShoppingCartSimple />
        </span>
        <span>
          <FaRegHeart />
        </span>
        <span>
          <RiSearchLine />
        </span>
      </div>
      <div>
        <h5>Beach Spider Lily</h5>
        <h5 className="price">$129.00</h5>
      </div>
    </div>
  );
}
export {Container, Button, Card}