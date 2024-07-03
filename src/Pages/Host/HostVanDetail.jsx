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

import React from "react"
import { useParams, Link } from "react-router-dom"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

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
            </div>
        </section>
    )
}