import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  Home from "./Pages/Home.jsx";
import  About from "./Pages/About.jsx";
import  Vans from "./Pages/Vans.jsx";
import  VanDetail from "./Pages/VanDetail.jsx";

import "./server";

function App() {
  return (
    <BrowserRouter>
    <header>
      <Link to="/">#VANLIFE</Link>
    <nav>
    {/* <Link to="/">Home</Link> */}
    <Link to="/about">About</Link>
    <Link to="/vans">Vans</Link>
    </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VanDetail />} />
      {/* <Route path="/vans/:id/:type" element={<VanDetail />} />
      to show nested route eg */}
    </Routes>
  </BrowserRouter>
  )
}

// function Home() {
//   return (
//     <h1>Hello, React Router its Home 🏠</h1>
//   )
// }

// function About() {
//   return (
//     <h1>Hello, its About page 🎉</h1>
//   )
// }

ReactDOM
.createRoot(document.getElementById('root'))
.render(<App />);