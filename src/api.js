// export async function getVans() {
//     const res = await fetch("/api/vans")
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getVans() {
//     const res = await fetch("/api/vans");
//     if (!res.ok) {
//         const error = new Error("Failed to fetch vans");
//         error.statusText = res.statusText;
//         error.status = res.status;
//         throw error;
//     }
    
//     const data = await res.json();
//     return data.vans;
// }


// api.js

// export async function getVans() {
//     const res = await fetch("/api/vans");
//     if (!res.ok) {
//         const error = new Error("Failed to fetch vans");
//         error.statusText = res.statusText;
//         error.status = res.status;
//         throw error;
//     }
//     const data = await res.json();
//     return data.vans;
// }

// export async function loginUser(email, password) {
//     const res = await fetch("/api/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })
//     });

//     if (!res.ok) {
//         const error = new Error("Failed to log in");
//         error.statusText = res.statusText;
//         error.status = res.status;
//         throw error;
//     }

//     const data = await res.json();
//     return data;
// }


//api.js
//vanspage require id
export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}
export async function loginUser(email, password) {
    const res = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
        const error = new Error("Failed to log in");
        error.statusText = res.statusText;
        error.status = res.status;
        throw error;
    }

    const data = await res.json();
    return data;
}
