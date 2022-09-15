/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Navbar = [
  { to: '/', text: 'Books' },
  { to: '/categories', text: 'Categories' },
];

const Nav = () => (
  <nav className={styles.navigation}>
    <h1>Bookstore CMS</h1>
    <ul className={styles.item}>
      {Navbar.map((link) => (
        <li key={link.to}>
          <NavLink to={link.to} className={styles.links}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
