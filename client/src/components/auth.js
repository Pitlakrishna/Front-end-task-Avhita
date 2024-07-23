// import axios from 'axios'
// import { useContext, createContext, useState, useEffect } from 'react'


// const AuthContext = createContext()

// const AuthProvider = ({ children }) => {
//     const [auth, setAuth] = useState({
//         user: null,
//         token: "",
//     })

//     // default axios
//     axios.defaults.headers.common["Authorization"] = auth?.token

//     useEffect(() => {
//         const dataGet = localStorage.getItem("auth")
//         if (dataGet) {
//             const parseData = JSON.parse(dataGet);
//             setAuth({
//                 ...auth,
//                 user: parseData.user,
//                 token: parseData.token,
//             })
//         }
//         //eslint-disable-next-line
//     }, []);
//     return (
//         <AuthContext.Provider value={[auth, setAuth]} >
//             {children}
//         </AuthContext.Provider>
//     );
// }


// // custom hook

// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };