import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

const [dataa,setDataa] = useState(data)

// delete
const handleDelete = (_id) => {
  console.log(_id);

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      
      axiosSecure
      .delete(`allData/${_id}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err)
           
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
  
          const remaining = dataa.filter((job) => job._id !== _id);
          setDataa(remaining);
          console.log(remaining);
        }
      
      
      });

         

       
    }
  });
};

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
                
                <Link to='/update'>
                <button className="btn text-blue-600 text-xl ml-1 btn-xs"><FaEdit></FaEdit></button>
                </Link>
            </td>
            <td>
                
                <button onClick={handleDelete} className="btn text-red-700 text-xl ml-1 btn-xs">
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