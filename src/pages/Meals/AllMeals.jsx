import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
    console.log(searchValue)

    console.log(data);

  return (
    <div className="my-10">


       
        <div className="input-group mb-4">
               
               <input
               onChange={(e)=>{setSearchValue(e.target.value)}}
               value={searchValue}
                 type="text"
                 placeholder="Search…"
                 className="input input-bordered lg:w-[1108px]"
               />
               <button className="btn btn-square w-16">
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



        {/* Card */}
    

       <div className="grid md:grid-cols-2 gap-6">
       {
          data
          .filter((item) => {
          return searchValue.toLowerCase() === ""
          ? item
          : item.mealType.toLowerCase().includes(searchValue);
        }).map(card=><div key={card._id} >
      
       <Card key={card._id} className="w-full h-[15rem]  max-w-[45rem] flex-row">
       <CardHeader
         shadow={false}
         floated={false}
         className="m-0 w-2/5 shrink-0 rounded-r-none"
       >
         <img
           src={card.mealImage}
           className="h-full w-full object-cover"
         />
       </CardHeader>
       <CardBody>
         <Typography variant="h6" color="gray" className="mb-4 uppercase">
           {card.category}
         </Typography>
         <Typography variant="h4" color="blue-gray" className="mb-2">
           {card.title}
         </Typography>
         <Typography color="black" className=" font-normal">
           {card.mealTitle}
         </Typography>
         <Typography color="gray" className=" font-normal">
           {card.description}
         </Typography>
         <Typography color="gray" className=" font-normal">
          <span className="font-serif font-semibold">Price: </span> ${card.price}
         </Typography>
         <Typography color="gray" className="mb-8 font-normal">
         <span className="font-serif font-semibold">Rating: </span> {card.rating}
         </Typography>
         
       </CardBody>
     </Card>
      
       
   </div>)


}
       </div>
    </div>
  );
};

export default AllMeals;
