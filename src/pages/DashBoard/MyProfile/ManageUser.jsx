import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";


const ManageUser = () => {

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
    
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${user.name} is now Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
   console.log(users);


    return (
        <div>

        <div className="flex  justify-evenly mt-8">
        <h1 className="text-3xl">All users</h1>
        <h1 className="text-3xl">Total users: {users.length}</h1>
            </div>

            <div className="lg:overflow-x-auto  lg:ml-20  mt-6">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Make admin</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody className="max-w-4">
      
      {
        users.map((user,i)=><tr key={user._id}>
            <th>{i + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className="text-center text-2xl">

                             { user.role === 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(user)} className="relative lg:right-10"><MdOutlineAdminPanelSettings ></MdOutlineAdminPanelSettings></button>}

                </td>
            <td>Status</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default ManageUser;