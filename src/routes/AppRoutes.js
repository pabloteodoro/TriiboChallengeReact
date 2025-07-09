import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/galeria" element={<Gallery />} />
    <Route path="/contato" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
