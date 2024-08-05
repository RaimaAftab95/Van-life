// challange to fetch data by using id of selected van code with ueffect and usestate

// import React from "react";
// import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";
// import { getVans } from "../../api";

// export function loader({ params }) {
//     console.log("vandetails loader params:",params);
//     return getVans(params.id)
// }


// export default function VanDetail() {

//     //we also no need params as we are doin it in loader
//     // const params = useParams();
//     // console.log("vandetails params:",params);

//     const location = useLocation();
//     // console.log("vandetails location:",location);

//     const van = useLoaderData();
//     console.log("use loader van:",van);

//     //we nolonger need usestate and useeffect as we are using loader now
//     // const [van, setVan] = React.useState(null);

//     // React.useEffect(() => {
//     //     fetch(`/api/vans/${params.id}`)
//     //         .then(res => res.json())
//     //         .then(data => setVan(data.vans))
//     // }, [params.id])


//       const search = location.state?.search || "";

//     //   to conditionally render search btn depend on its type
//      const type = location.state?.type || "all";

//     return (
//         <div className="van-detail-container">

// <Link
//                 // to=".."
//                 // modify the link `to` prop to send the user back to prev page with searchParaams included, if they exist. bcz we may not have anything in that state
//                 to={`..${search}`}
//                 relative="path"
//                 className="back-button"
//             >&larr; <span>Back to {type} vans</span></Link>

//             {van ? (
//                 <div className="van-detail">
//                     <img alt={van.name} src={van.imageUrl} />
//                     <i className={`van-type ${van.type} selected`}>
//                         {van.type}
//                     </i>
//                     <h2>{van.name}</h2>
//                     <p className="van-price"><span>${van.price}</span>/day</p>
//                     <p>{van.description}</p>
//                     <button className="link-button">Rent this van</button>
//                 </div>
//             ) : <h2>Loading...</h2>}
//         </div>
//     )
// }


//clean code after removing useeffect and usestate
import React from "react"
import { Link,useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"

export function loader({ params }) {
    return getVans(params.id)
}

export default function VanDetail() {
    const location = useLocation()
    const van = useLoaderData()

    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

            <div className="van-detail">
                <img alt={van.name} src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>
                    {van.type}
                </i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>

        </div>
    )
}