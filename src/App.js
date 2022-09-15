/* eslint-disable */

import React from 'react';
import './App.css';
import Nav from './components/Nav';
import BooksList from './components/BooksList';
import Categories from './components/Categories';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<BooksList />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
