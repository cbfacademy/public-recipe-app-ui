import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="app-header">
      <header>
        <h1>Recipe App</h1>
        <hr />
        <div className="links">
          <NavLink to="/" className="link" activeclassname="active" exact="true">
            Recipes
          </NavLink>
          <NavLink to="/create" className="link" activeclassname="active" exact="true">
            Create
          </NavLink>
        </div>
      </header>
    </div >
  );
};

export default Header;
