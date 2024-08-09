// import { redirect } from "react-router-dom"

// export async function requireAuth() {
//     const isLoggedIn = false;
    
//     if (!isLoggedIn) {
//         throw redirect("/login")
//     }
// }
// Error Handling: If the throw redirect(...) is not properly caught by React Router, it might result in an unexpected error, which could be the cause of the issue you encountered. so use below code

import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false; // Replace with actual authentication check
  
  if (!isLoggedIn) {
    return redirect("/login"); // Ensure this is the correct way to handle redirection
  }
  return null; // Ensure the loader does not trigger any incorrect HTTP methods
}