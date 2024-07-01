// import React from "react"

// /**
//  * Challenge: Fetch and map over the data to display it on
//  * the vans page. For an extra challenge, spend time styling
//  * it to look like the Figma design.
//  * 
//  * Hints:
//  * 1. Use `fetch(/api/vans)` to kick off the request to get the
//  *    data from our fake Mirage JS server
//  * 2. What React hook would you use to fetch data as soon as the
//  *    Vans page loads, and only fetch it the one time?
//  * 3. You may get an error saying "console.groupCollapsed is not
//  *    a function". You can ignore it for now.
//  */


// export default function Vans() {
//     return (
//         <h1>Vans page goes here 🚐</h1>
//     )
// }

// #########################################
// challenge#1 code to fetch data from api
// import React from "react"

/**
 * {
    * id: "1", 
    * name: "Modest Explorer", 
    * price: 60, 
    * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", 
    * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", 
    * type: "simple"
 * }
 */


// export default function Vans() {
//     const [vans, setVans] = React.useState([])
//     React.useEffect(() => {
//         fetch("/api/vans")
//             // .then(res => res.json())
//             // .then(data => setVans(data.vans))
//             .then(res => res.json())
//             .then(data => {
//                 console.log("data", data.vans)
//                 setVans(data.vans)
//             })
//             .catch(error => console.error("Error fetching vans:", error));
//     }, [])

//     const vanElements = vans.map(van => (
//         <div key={van.id} className="van-tile">
//             <img alt={van.name} src={van.imageUrl} />
//             <div className="van-info">
//                 <h3>{van.name}</h3>
//                 <p>${van.price}<span>/day</span></p>
//             </div>
//             <i className={`van-type ${van.type} selected`}>{van.type}</i>
//         </div>
//     ))

//     return (
//         <div className="van-list-container">
//             <h1>Explore our van options</h1>
//             <div className="van-list">
//                 {vanElements}
//             </div>
//         </div>
//     )
// }


/**
 * Challenge: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */

import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img alt={van.name} src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}