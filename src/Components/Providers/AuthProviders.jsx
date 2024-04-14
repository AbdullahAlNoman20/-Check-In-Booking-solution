import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../public/firebase.init";
// import app from "../../../public/firebase.init";


// // Context api create
export const AuthContext = createContext(null)


// const auth = getAuth(app);



const AuthProviders = ({children}) => {


//     const [user, setUser] = useState(null)


//     // Create User
    const registerUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
//     // For LogIn
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
//     // For logout
//     const logOut = () => {
//         return signOut(auth)
//     }


//     useEffect(()=>{
//       const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
//             console.log('user from auth', currentUser)
//             setUser(currentUser)
//         })
//         return()=>{
//             unSubscribe()
//         }
//     },[])



    const authInfo ={
        // user,
        registerUser,
        signIn,
        // logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProviders;