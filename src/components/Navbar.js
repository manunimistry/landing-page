import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'><Link to="/">TechVantage</Link></h1>
      <ul>
      <li><Link to="/product" >Product</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to='/resources'>Resources</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
       
      </ul>

      <div>
        <ul> 
        <li className='btn2'>Log in</li>
        <li><button className='navbtn'>Get started now</button></li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar
