import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const AllMeal = () => {

    const [data,setData] = useState()
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure
          .get("/allData")
          .then((res) => setData(res.data))
          .catch((err) => console.error(err));
      }, [axiosSecure]);

console.log(data);

    return (
        <div>
            <h1 className="text-3xl text-center py-6 underline">All Meal</h1>
           <div className="overflow-x-auto ml-10">
  <table className="table table-xs">
    <thead>
      <tr>
        <th>No.</th> 
        <th>Title</th> 
        <th>Like</th> 
        <th>Reviews</th> 
        <th>Name</th> 
        <th>Email</th> 
        <th>Update</th> 
        <th>Delete</th>
        <th>Meals</th>
      </tr>
    </thead> 
    <tbody>
        
      {
        data?.map((item,i)=><tr key={item._id}>
            <th>{i + 1}</th> 
            {/* TODO: add dynamecly value */}
            <td>{item.title}</td> 
            <td>{item.like}</td> 
            <td>{item.reviews}</td> 
            <td>{item.name}</td> 
            <td>{item.email}</td>
            <td>
                
                <button className="btn text-blue-600 text-xl ml-1 btn-xs"><FaEdit></FaEdit></button>
            </td>
            <td>
                
                <button className="btn text-red-700 text-xl ml-1 btn-xs">
                <MdDeleteForever />
                </button>
            </td>
            <td>
               <Link to={`/mealDetails/${item._id}`}>
               <button className="btn btn-sm btn-outline">View meal</button>
               </Link>
            </td>
            
          </tr>)
      }

      </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllMeal;