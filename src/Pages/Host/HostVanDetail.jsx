// import React from "react"

// export default function HostVanDetail() {
//     /**
//      * Challenge (not optional!): build the shared UI portion of the
//      * Host Van Detail page. This is
//      * 
//      * Optional portion: also style it to look like the design.
//      * 
//      * For now, get the data from a request to `/api/host/vans/:id`
//      * and display the van image, name, price, type
//      */
//     return <h1>Host Van Detail Page</h1>
// }

import React from "react";
import { useParams, Link,NavLink, Outlet } from "react-router-dom";

export default function HostVanDetail() {
    const { id } = useParams();
    const [currentVan, setCurrentVan] = React.useState(null);

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [id])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            {/* back to one route we use .. as going up one level from the current URL path. */}
            {/* The relative prop indicates that the to prop should be resolved relative to the current URL path. */}
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} alt="currentVan.id" />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}