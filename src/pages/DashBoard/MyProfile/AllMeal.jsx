import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAllData from "../../../hooks/useAllData";

const AllMeal = () => {
 
  const axiosSecure = useAxiosSecure()
  const [meals,refetch] = useAllData()
  



// delete
const handleDelete = (meal) => {
  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
      if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/allData/${meal._id}`);
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
              // refetch to update the ui
              refetch()
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${meal.title} has been deleted`,
                  showConfirmButton: false,
                  timer: 1500
              });
          }


      }
  });
}


    return (
        <div>
            <h1 className="text-3xl text-center py-6 underline">All Meal</h1>
           <div className="overflow-x-auto lg:max-w-full max-w-[360px] mx-auto ml-10">
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
        meals?.map((item,i)=><tr key={item._id}>
            <th>{i + 1}</th> 
            {/* TODO: add dynamecly value */}
            <td>{item.title}</td> 
            <td>{item.like}</td> 
            <td>{item.reviews}</td> 
            <td>{item.name}</td> 
            <td>{item.email}</td>
            <td>
                
                <Link to={`/dashboard/update/${item._id}`}>
                <button className="btn text-blue-600 text-xl ml-1 btn-xs"><FaEdit></FaEdit></button>
                </Link>
            </td>
            <td>
                
                <button onClick={()=>handleDelete(item)} className="btn text-red-700 text-xl ml-1 btn-xs">
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