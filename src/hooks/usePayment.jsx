import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Firebase/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const usePayment = () => {
    const axiosSecure = useAxiosSecure();
   
    const {  data: pay = [],refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/allData`);
            return res.data;
        }
    })
console.log(pay);
    return [pay, refetch]

};

export default usePayment;