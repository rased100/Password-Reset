import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Page1 from './Pages/ResetPassword/ResetPassword/Page1/Page1';
import Page2 from './Pages/ResetPassword/ResetPassword/Page2/Page2';
import Page3 from './Pages/ResetPassword/ResetPassword/Page3/Page3';
import Page4 from './Pages/ResetPassword/ResetPassword/Page4/Page4';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </div>
  );
}

export default App;
