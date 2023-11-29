
import { useContext } from "react";
import { AuthContext } from "../../../Authentication/Firebase/AuthProvider";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <div className="relative left-20 border shadow-xl min-h-screen w-[1000px]">
        <h1 className="text-center text-2xl font-semibold mt-10">Admin Profile</h1>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="avatar flex justify-center">
            <div className="w-24 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">{user?.displayName}</h2>
            <p><span className="font-serif font-semibold">Email: </span>{user?.email}</p>
            <p>TODO: badges</p>
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