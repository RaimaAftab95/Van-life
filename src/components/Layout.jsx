import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

// outlet tells what to render after header depending on route 