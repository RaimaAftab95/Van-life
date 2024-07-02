import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout() {
    return (
        <>
        {/* <h1>This is the layout route</h1> */}
            <Header />
            <Outlet />
        </>
    )
}

// outlet tells what to render after header depending on route 