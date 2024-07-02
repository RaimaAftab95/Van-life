// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// export default function HostLayout() {
//     return (
//         <>
//             <nav className="host-nav">
//                 <Link to="/host">Dashboard</Link>
//                 <Link to="/host/income">Income</Link>
//                 <Link to="/host/reviews">Reviews</Link>
//             </nav>
//             <Outlet />
//         </>
//     )
// }


// converting link to navlink 
import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="/host"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/host/income"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Income
                </NavLink>

                <NavLink
                    to="/host/reviews"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink>

            </nav>
            <Outlet />
        </>
    )
}