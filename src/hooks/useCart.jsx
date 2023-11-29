// api, axios (axios secure), tan stack 

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Authentication/Firebase/AuthProvider";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useContext(AuthContext);
    console.log(user);
    const {  data: cart = [],refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/allData?email=${user?.email}`);
            return res.data;
        }
    })
console.log(cart);
    return [cart, refetch]
};

export default useCart;