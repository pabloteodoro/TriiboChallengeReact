import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Gallery from '../pages/gallery/Gallery';
import Contact from '../pages/contact/Contact';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/galeria" element={<Gallery />} />
    <Route path="/contato" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
