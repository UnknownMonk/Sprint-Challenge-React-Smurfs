import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div style={smurfNav}>
      <NavLink to={'/'}>
        <span style={navSpace}>Smurf</span>
      </NavLink>
      <NavLink to={'/smurf-form'}>
        <span style={navSpace}>Smurf Form</span>
      </NavLink>
    </div>
  );
};

const smurfNav = {
  margin: '10px'
};
const navSpace = {
  padding: '0 20px',
  fontSize: '20px'
};

export default Nav;
