import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
 
  return (
    <>
      <nav className="navbar">
        <div className="left_nav">
          <NavLink to='/' className='logo_value' >FundWeave</NavLink>
          <NavLink to='/invest' >  <div className="invest_nav">Invest Now</div></NavLink>
        </div>
        <div className="right_nav">

          <NavLink to='/dashboard' ><button className="login">Log In</button></NavLink>
          <button className="signup">Sign Up</button>
        </div>
      </nav>

    </>
  )
}

export default Navbar