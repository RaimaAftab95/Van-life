import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
        {/* <h1>This is the layout route</h1> */}
            {/* <Header />
            <Outlet />
            <Footer />  */}
                <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
        </>
    )
}

// outlet tells what to render after header depending on route 