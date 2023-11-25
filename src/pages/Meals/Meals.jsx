import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Authentication/Firebase/AuthProvider";


const Meals = () => {
    const { user } = useContext(AuthContext);
    console.log(user.displayName);
  
    const axiosSecure = useAxiosSecure();
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
  
    useEffect(() => {
      axiosSecure
        .get("/allData")
        .then((res) => setData(res.data))
        .catch((err) => console.error(err));
    }, [axiosSecure]);
    //   console.log(data);
  
    useEffect(() => {
      data.map((item) => setData2(item));
    }, [data]);
    // console.log(data2);
    const { description, mealImage,rating, price } = data2;
    console.log(description);


    return (
        <div className="my-10">
            <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={mealImage}
            alt="Album"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{user?.displayName}</h2>
          <span>{description}</span>
         <h3><span className="font-serif font-semibold">Rating:</span> {rating} </h3>
         <h3><span className="font-serif font-semibold">Price:</span> ${price} </h3>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Meals;