/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Authentication/Firebase/AuthProvider";

const PrivetRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    if(loading){
      return <span className="loading loading-infinity loading-lg"></span>
    }

    if(user){
       return children
    }


    return (
        <Navigate to='/login'>
            
        </Navigate>
    );
};



export default PrivetRoute;