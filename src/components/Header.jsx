// import React from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//     return (
//         <header>
//             <Link className="site-logo" to="/">#VanLife</Link>
//             <nav>
//                 <Link to="/host">Host</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/vans">Vans</Link>
//             </nav>
//         </header>
//     )
// }

// convert link to NavLink to pass className props and make links more attractive
import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}