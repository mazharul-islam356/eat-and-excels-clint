import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://assingment-12-server-roan.vercel.app'
})

const useAxiosPublic = () => {

return axiosPublic

};

export default useAxiosPublic;

// https://assingment-12-server-roan.vercel.app