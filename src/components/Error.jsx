import React from "react"
import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError();
    console.log(error);
    
    return (
        <>
        <h1>Error: {error.message}</h1>
        <pre>{error.status} - {error.statusText}</pre> 
        </>
    )
}

//cgt
// import React from "react";

// export default function Error({ error }) {
//     return (
//         <div className="error-container">
//             <h1>Unexpected Application Error!</h1>
//             <pre>{error.message || "An unexpected error occurred."}</pre>
//         </div>
//     );
// }
