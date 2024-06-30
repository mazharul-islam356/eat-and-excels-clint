import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
 
} from "@material-tailwind/react";
import { Typography } from "@mui/material";
import { IoMdPricetags } from "react-icons/io";
import { TiStarHalfOutline } from "react-icons/ti";


const AllMeals = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/allData")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [axiosSecure]);
  // console.log(data);
  const [searchValue, setSearchValue] = useState("");
  // const [price, setPrice] = useState(price);
  const [category, setCategory] = useState("");


  // console.log(data);


  return (
    <div className="my-10">
      <div className="input-group mb-4">
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
          type="text"
          placeholder="Search…"
          className="input input-bordered rounded-r lg:w-[1108px]"
        />
        <button className="btn btn-square rounded-l relative top-1 w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

          {/* input filed for price and category */}
      <div className="flex gap-4">
      <div className="w-72 mb-4">
      <select onChange={(e) => {
            setCategory(e.target.value);
          }} className="select select-sm select-bordered w-full max-w-xs">
  <option disabled selected>Select by category</option>
  <option>breakfast</option>
  <option>lunch</option>
  <option>dinner</option>
</select>

    </div>
       
      </div>

      {/* Card */}

      <div className="grid md:grid-cols-2 gap-10">
        {data
         
          .filter((item) => {
            
            const isSearchValue = searchValue.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(searchValue);


            const isCategoryValue = category.toLowerCase() === ""
                ? item
                : item.type.toLowerCase().includes(category);
         


            return isSearchValue && isCategoryValue;
          })
          .map((card) => (
            <div key={card._id}>
              <Card
                key={card._id}
                className="w-full h-[21rem]  max-w-[44rem] flex-row"
              >
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                  <img
                    src={card.image}
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h6"
                    color="gray"
                    className="mb-4 uppercase"
                  >
                    {card.category}
                  </Typography>
                  <Typography variant="h5" color="black" className="mb-2">
                    {card.title}
                  </Typography>
                  <Typography color="gray" className="border w-28 text-center border-blue-200 mx-auto shadow-md p-2 rounded-lg px-4 font-normal">
                    {card.type}
                  </Typography>
                  <Typography color="gray" className="pt-2 font-normal">
                    {card.description}
                  </Typography>
                  <CardFooter>

         <div className="flex justify-evenly gap-8">
         <div className="flex items-center gap-2">
          <Typography color="black" className="flex text-md font-bold items-center gap-1"><IoMdPricetags />Price:  </Typography>
          {card.price}
          </div>

          <div className="flex items-center gap-2">
          <Typography color="black" className="flex text-md font-bold items-center gap-1"><TiStarHalfOutline />Rating:  </Typography>
          {card.rating}
          </div>
         </div>

                  </CardFooter>
                </CardBody>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllMeals;
