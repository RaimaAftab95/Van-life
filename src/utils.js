// import { redirect } from "react-router-dom"

// export async function requireAuth() {
//     const isLoggedIn = false
    
//     if (!isLoggedIn) {
//         throw redirect("/login?message=You must log in first.")
//     }
//     return null; 
// }
// Error Handling: If the throw redirect(...) is not properly caught by React Router, it might result in an unexpected error, which could be the cause of the issue you encountered. so use below code

import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false;
  
  if (!isLoggedIn) {
    return redirect("/login?message=You must log in first.");
  }
  return null; 
}




