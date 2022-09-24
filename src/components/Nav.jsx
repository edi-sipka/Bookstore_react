/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import { BsPersonCircle } from 'react-icons/bs';

const Navbar = [
  { to: '/', text: 'BOOKS' },
  { to: '/categories', text: 'CATEGORIES' },
];

const Nav = () => (
  <nav className={styles.navigation}>
    <h1 className={styles.headingText}>Bookstore CMS</h1>
    <ul className={styles.item}>
      {Navbar.map((link) => (
        <li key={link.to}>
          <NavLink to={link.to} className={styles.links}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
    <div className={styles.user}>
      <BsPersonCircle />
    </div>
  </nav>
);

export default Nav;
