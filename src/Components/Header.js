import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach(element => sum += Number.parseFloat(element.price));
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='sum'>Sum: {new Intl.NumberFormat().format(sum)}$</p>
  </div>)}
  const showNothing = (props) => {
    return(<div className='empty'>
       <h2>No goods</h2>
    </div>)
  }

export default function Header(props) {
  let [carOpen, setcarOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>Anime Store</span>
        <ul className='nav'>
          <li>Goods</li>
          <li>Profile</li>
          <li>Contact</li>
        </ul>
        <FaShoppingCart onClick={() => setcarOpen(carOpen = !carOpen)} className={`shop-card ${carOpen && 'active'}`} />
        {carOpen && (
          <div className='shop-cart '>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}

          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
