
import './App.css';
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProfilePage from './Profilepage';

function App() {


  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
