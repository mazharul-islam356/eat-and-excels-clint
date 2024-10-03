import { useContext, useEffect, useState } from "react";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../Authentication/Firebase/AuthProvider";

const AllReviews = () => {

    const [data, setData] = useState([]);
    const {user} = useContext(AuthContext)

    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get('/reviews')
          .then(res => setData(res.data))
          .catch(err => console.error(err));
      }, [axiosPublic]);
      console.log(data);

    return (
        <div className="ml-16 mt-14 shadow-md p-4 rounded-lg">
            <table className="table overflow-x-auto">
            <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Customer Reviews</th>
       
      </tr>
    </thead>
           {
            data.map((review,i)=><tr key={review._id}>
                <th>{i+1}</th>
                <td>{user?.displayName}</td>
                <td>{review.reviewData}</td>
               
              </tr> )
           }
            </table>
        </div>
    );
};

export default AllReviews;