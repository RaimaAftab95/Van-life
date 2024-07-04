// challange to fetch data by using id of selected van
import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function VanDetail() {
    const params = useParams();
    console.log("vandetails params:",params);
    const location = useLocation();
    console.log("vandetails location:",location);

    const [van, setVan] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

      const search = location.state?.search || "";

    //   to conditionally render search btn depend on its type
     const type = location.state?.type || "all";

    return (
        <div className="van-detail-container">

<Link
                // to=".."
                // modify the link `to` prop to send the user back to prev page with searchParaams included, if they exist. bcz we may not have anything in that state
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

            {van ? (
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
            ) : <h2>Loading...</h2>}
        </div>
    )
}