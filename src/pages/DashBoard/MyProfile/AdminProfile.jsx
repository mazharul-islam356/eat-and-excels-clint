
import { useContext } from "react";
import { AuthContext } from "../../../Authentication/Firebase/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminProfile = () => {

  
  const { user } = useContext(AuthContext);
  console.log(user);

  const axiosSecure = useAxiosSecure()
    const { data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users',{
              headers:{
                authorization: `bearar ${localStorage.getItem('access-token')}`
              }
            })
            return res.data
        }
    })


  return (
    <div>
      <div className="relative left-20 border shadow-xl min-h-screen w-[1000px] font-poppins">

      <p className="text-3xl font-semibold text-center mt-10">Total user : {users.length}</p>
        <h1 className="text-center text-2xl underline mb-10 font-semibold mt-10">Admin Profile</h1>

        <div className="card w-96 ml-80 mt-40 bg-base-100 shadow-xl">
          <div className="avatar flex justify-center">
            <div className="w-24 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">{user?.displayName}</h2>
            <p className="flex gap-1"><span className="font-semibold">Email: </span>{user?.email}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;

// const AdminProfile = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default AdminProfile;