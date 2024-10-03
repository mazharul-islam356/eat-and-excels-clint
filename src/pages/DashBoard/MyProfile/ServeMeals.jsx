import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ServeMeals = () => {

    const [data,setData] = useState()

    const axiosSecure = useAxiosSecure()

    

    axiosSecure.get('/send')
    .then(res=>{
        setData(res.data);
    })


    return (
        <div>
          <div className="pl-10 lg:max-w-full max-w-[360px] mx-auto pt-4 overflow-x-auto">
  <table className="table table-sm">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Meal Title</th>
        <th>Serve</th>
      </tr>
    </thead>
    <tbody>
      
     {
        data?.map((item,i)=> <tr key={item._id}>
            <td>{i+1}</td>
            <th>{item?.email}</th>
            <td>{item?.mealTitle}</td>

            
              <td >
                <Link to={`/allMeals`}>
                <button className="btn btn-outline btn-sm">
                Serve
                </button>
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

export default ServeMeals;