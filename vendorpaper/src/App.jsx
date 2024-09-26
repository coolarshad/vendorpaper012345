import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './views/HomePage';
import ListPage from './views/ListPage';
import StorePage from './views/StorePage';
import ProductPage from './views/ProductPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

