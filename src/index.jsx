// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import  Home from "./Pages/Home.jsx";
// import  About from "./Pages/About.jsx";
// import  Vans from "./Pages/Vans/Vans.jsx";
// import  VanDetail from "./Pages/Vans/VanDetail.jsx";
// import Dashboard from "./Pages/Host/Dashboard";
// import Income from "./Pages/Host/Income";
// import Reviews from "./Pages/Host/Reviews";
// import HostVans from "./Pages/Host/HostVans";
// import HostVanDetail from "./Pages/Host/HostVanDetail";
// import HostVanInfo from "./Pages/Host/HostVanInfo";
// import HostVanPricing from "./Pages/Host/HostVanPricing";
// import HostVanPhotos from "./Pages/Host/HostVanPhotos";
// import NotFound from "./Pages/NotFound";
// import Layout from "./components/Layout.jsx";
// import HostLayout from "./components/HostLayout";

// import "./server.js";

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="vans" element={<Vans />} />
//       <Route path="vans/:id" element={<VanDetail />} />
//         {/* <Route path="/vans/:id/:type" element={<VanDetail />} />
//       to show nested route eg */}

//       <Route path="host" element={<HostLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="income" element={<Income />} />
//           <Route path="reviews" element={<Reviews />}  />
//           <Route path="vans" element={<HostVans />} />
//           {/* make hostvandetailpage a layout */}
//           <Route path="vans/:id" element={<HostVanDetail />}>
//               <Route index element={<HostVanInfo />} />
//               <Route path="pricing" element={<HostVanPricing />} />
//               <Route path="photos" element={<HostVanPhotos />} />
//             </Route>
//       </Route>
//       <Route path="*" element={<NotFound />}/>
//        </Route>
//     </Routes>
//   </BrowserRouter>
//   )
// }
// ReactDOM
// .createRoot(document.getElementById('root'))
// .render(<App />);


// Change router to a newer one that supports data APIs use createBrowserRouter
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import './index.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans , { loader as vansLoader } from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetail";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostVans from "./Pages/Host/HostVans";
import HostVanDetail from "./Pages/Host/HostVanDetail";
import HostVanInfo from "./Pages/Host/HostVanInfo";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
    />
    <Route 
    path="vans"
    element={<Vans />}
    errorElement={<Error />}
    loader={vansLoader}
    />
    <Route path="vans/:id" element={<VanDetail />} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="vans" element={<HostVans />} />
      <Route path="vans/:id" element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />} />
        <Route path="pricing" element={<HostVanPricing />} />
        <Route path="photos" element={<HostVanPhotos />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);