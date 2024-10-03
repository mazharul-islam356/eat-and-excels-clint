import { useContext } from "react";
import { AuthContext } from "../../../Authentication/Firebase/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <div className="relative left-20 border shadow-xl min-h-screen w-[1000px] font-poppins">
        <h1 className="text-center text-2xl font-semibold underline mt-10 ">My Profile</h1>

        <div className="card w-96 ml-80 mt-40 border bg-base-100 shadow-xl pt-6">
          <div className="avatar flex justify-center">
            <div className="w-24 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">{user?.displayName}</h2>
            <p className="flex gap-1"><span className="font-serif font-semibold">Email: </span>{user?.email}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
