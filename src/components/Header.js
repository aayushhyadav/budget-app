import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Budget App</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Dashboard
      </NavLink>
      <br></br>
      <NavLink to="/create" activeClassName="is-active">
        Create Budget
      </NavLink>
      <br></br>
      <NavLink to="/edit" activeClassName="is-active">
        Edit Budget
      </NavLink>
      <br></br>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>
  );
};

export default Header;
