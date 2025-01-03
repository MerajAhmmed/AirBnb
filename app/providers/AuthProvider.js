// // app/providers/AuthProvider.js
// import { createContext, useContext } from "react";
// import useAuthStatus from "../hooks/useAuthStatus";

// // Create context
// const AuthContext = createContext();

// // AuthProvider to wrap your app
// export const AuthProvider = ({ children }) => {
//   const { isAuthenticated, status } = useAuthStatus(); // Using the custom hook

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, status }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use authentication status
// export const useAuth = () => {
//   return useContext(AuthContext);
// };
