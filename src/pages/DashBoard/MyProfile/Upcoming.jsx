import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Upcoming = () => {

    const axiosSecure = useAxiosSecure()
    const [data,setData] = useState()
   axiosSecure.get('/upcoming')
   .then(res=>setData(res.data))

    return (
        <div>
            <h1 className="text-3xl text-center py-6 underline">Upcoming Meals</h1>
            <div className="overflow-x-auto ml-10">
            <table className="table table-xs">
    <thead>
      <tr>
        <th>No.</th> 
        <th>Title</th> 
        <th>Publish</th> 
        
      </tr>
    </thead> 
    <tbody>
        
      {
        data?.map((item,i)=><tr key={item._id}>
            <th>{i + 1}</th> 
            
            <td>{item.title}</td> 
            
            <td>
                <Link>
                <button className="btn btn-sm btn-outline">Publish</button>
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

export default Upcoming;