import React from 'react';
import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-quote">
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
