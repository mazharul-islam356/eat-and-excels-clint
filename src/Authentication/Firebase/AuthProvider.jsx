/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "./firebase";
import useAxiosPublic from "../../hooks/useAxiosPublic";


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading,setLoading]= useState(true)
    const axiosPublic = useAxiosPublic()


    // google login
    const googleLogin = () => {
        setLoading(true)
       return signInWithPopup(auth,googleProvider)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }


    // REuser
    const signUp = (email,pass) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    // signOut
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    

    // onAuthStateChanged
    useEffect(()=>{
        onAuthStateChanged(auth,currentUser=>{
            console.log('observing current user', currentUser);
            setUser(currentUser)
            if(currentUser){
                // get token
                const userInfo = {
                    email: currentUser.email,
                    photoURL:currentUser.photoURL
                }
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }
            else{ 
            localStorage.removeItem('access-token')
            }
            setLoading(false)
            
        })
    },[axiosPublic])


    const authintication = {
        user,
        googleLogin,
        signUp,
        logOut,
        updateUserProfile,
        loading
    }



    return (
      
        <AuthContext.Provider value={authintication}>
            {children}
        </AuthContext.Provider>
            
      
    );
};

export default AuthProvider;