import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import './index.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans, { loader as vansLoader } from "./Pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./Pages/Vans/VanDetail";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./Pages/Host/HostVans";
import HostVanDetail, { loader as hostVanDetailLoader } from "./Pages/Host/HostVanDetail";
import HostVanInfo from "./Pages/Host/HostVanInfo";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import NotFound from "./Pages/NotFound";
import Login, { loader as loginLoader } from "./Pages/Login";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";
import { requireAuth } from "./utils";

import "./server";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route
      path="vans/:id"
      element={<VanDetail />}
      loader={vanDetailLoader}
    />

    <Route path="host" 
    element={<HostLayout />} 
    errorElement={<Error />}
    >
      <Route
        index
        element={<Dashboard />}
        //  loader={async () => await requireAuth()}
        loader={requireAuth} 
      />
      <Route
        path="income"
        element={<Income />}
        // loader={async () => await requireAuth()}
        loader={requireAuth} 
      />
      <Route
        path="reviews"
        element={<Reviews />}
        // loader={async () => await requireAuth()}
        loader={requireAuth} 
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetail />}
        loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          //  loader={async () => await requireAuth()}
          loader={requireAuth} 
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          //  loader={async () => await requireAuth()}
          loader={requireAuth} 
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          //  loader={async () => await requireAuth()}
          loader={requireAuth} 
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
