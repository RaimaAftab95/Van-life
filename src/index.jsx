import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from "./Pages/Home.jsx";
import  About from "./Pages/About.jsx";
import  Vans from "./Pages/Vans/Vans.jsx";
import  VanDetail from "./Pages/Vans/VanDetail.jsx";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import Layout from "./components/Layout.jsx";
import HostLayout from "./components/HostLayout";

import "./server";

function App() {
  return (
    <BrowserRouter>
    {/* <header>
      <Link to="/">#VANLIFE</Link>
    <nav>
    {/* <Link to="/">Home</Link> */}
    {/* <Link to="/about">About</Link>
    <Link to="/vans">Vans</Link> */}
    {/* </nav> */}
    {/* </header> 
    as now we have made seperate component for header*/} 
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VanDetail />} />
        {/* <Route path="/vans/:id/:type" element={<VanDetail />} />
      to show nested route eg */}

      <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />}  />
      </Route>
    
       </Route>
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