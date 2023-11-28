
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllData = () => {
    const axiosSecure=useAxiosSecure()
    const {data : meals = [], refetch } =useQuery({
        queryKey : ['meals'] ,
        queryFn : async ()=>{
            const res= await axiosSecure.get('/allData')
            return res.data
        }
    })
    return [meals , refetch ]
   
};

export default useAllData;