import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import ErrorPage from '../pages/ErrorPage';

const AppRouter: React.FC = () => {


  return (
    <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route element={<About />} />
      </Routes>
  );
};

export default AppRouter;