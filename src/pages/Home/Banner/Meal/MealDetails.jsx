import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MealDetails = () => {
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
  const { mealTitle, description, mealImage } = data2;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={mealImage} className="max-w-sm rounded-2xl shadow-2xl mr-4" />
          <div>
            <h1 className="text-5xl font-bold">{mealTitle}</h1>
            <p className="py-6">{description}</p>
            <Link to='/AllMeals'><button className="btn btn-outline">See All</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
