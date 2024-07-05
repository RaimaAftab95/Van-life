/**
 * Challenge: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */

// import React from "react";
// import { Link,useSearchParams } from "react-router-dom";

// export default function Vans() {

//     // const [searchParams, setSearchParams] = useSearchParams();
//     const [searchParams] = useSearchParams();
//     const [vans, setVans] = React.useState([]);

//     const typeFilter = searchParams.get("type");
//     console.log( "vans typefilter:", typeFilter );

//     React.useEffect(() => {
//         fetch("/api/vans")
//             .then(res => res.json())
//             .then(data => setVans(data.vans))
//     }, [])

//     const vanElements = vans.map(van => (
//         <div key={van.id} className="van-tile">
//             <Link to={`/vans/${van.id}`}>
//                 <img alt={van.name} src={van.imageUrl} />
//                 <div className="van-info">
//                     <h3>{van.name}</h3>
//                     <p>${van.price}<span>/day</span></p>
//                 </div>
//                 <i className={`van-type ${van.type} selected`}>{van.type}</i>
//             </Link>
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


import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
    // return "Vans data goes here"
   return getVans();
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();

    // bcz now we dont need vans state and loading state as we r using loader to load data
    // const [vans, setVans] = React.useState([]);
    // const [loading, setLoading] = React.useState(false);
    //const [error, setError] = React.useState(null);
    const [error] = React.useState(null);
    // const data = useLoaderData();
    //fetch vans using useloaderdata hook
    const vans = useLoaderData();

    // console.log("loader data:",data);
    console.log("loader data:",vans);

    const typeFilter = searchParams.get("type");
    // console.log("state to pass in link:",searchParams.toString());

    // React.useEffect(() => {
    //     fetch("/api/vans")
    //         .then(res => res.json())
    //         .then(data => setVans(data.vans))
    // }, [])
    // move this fetch api in api.js

// use api.js getVans function
// React.useEffect(() => {
//     async function loadVans() {
//         setLoading(true)
//         try {
//             const data = await getVans()
//             setVans(data)
//         } catch (error) {
//             setError(error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     loadVans()
// }, [])
// now using loader and useloaderdata hook to fetch vans list instead of useeffect

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            {/* <Link to={`/vans/${van.id}`}> change this absolute path to relative*/}
            <Link 
            to={van.id}
            // state={{ search: searchParams.toString() }}

            // This effectively formats the string as a query string that can be used directly in URLs
            state={{ 
                search: `?${searchParams.toString()}`,
                type: typeFilter  
            }}
            >
           
                <img alt={van.name} src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>
{/* conditionally render clear btn only if filters are applied */}
                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}