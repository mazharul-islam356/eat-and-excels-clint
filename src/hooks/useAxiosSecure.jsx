import axios from "axios";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Authentication/Firebase/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://assingment-12-server-roan.vercel.app'
})

const useAxiosSecure = () => {

    // const navigate = useNavigate()
    // const {logOut} = useContext(AuthContext)

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors',token);
        config.headers.authorization = `bearar ${token}`
        return config;
    }, function(error){
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async (error) => {
        const status = error.response.status;

        console.log('status error in the interceptors', status);

        return Promise.reject(error)
    })


return axiosSecure

};

export default useAxiosSecure;