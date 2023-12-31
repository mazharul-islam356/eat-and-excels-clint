import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }
  

const Membership = () => {

    const [items,setItem] = useState([])
  const axiosPublic = useAxiosPublic()
    
  useEffect(() => {
    axiosPublic.get('/memberShipp')
      .then(res => setItem(res.data))
      .catch(err => console.error(err));
  }, [axiosPublic]);
 
console.log(items);


    return (
      <div>
     
    <h1 className="text-4xl rounded-3xl shadow-[#4c9fb0] shadow-sm  w-96 p-4 mx-auto text-center font-sans mt-28 mb-10">Select Your Package</h1>
      <div className="my-4 text-w text-y md:grid grid-cols-3 justify-center items-center ml-10 lg:ml-20">
            {
            items?.map(item=><Link to={`payment/${item._id}`} key={item._id}  >
                <Card  color={item.colorCode} variant="gradient" className="w-full mb-6 lg:mb-0 max-h-[35rem] max-w-[20rem] p-8">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal uppercase"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="h1"
                    color="white"
                    className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                  >
                    <span className="mt-2 text-4xl">$</span>{item.price}{" "}
                    <span className="self-end text-4xl">/mo</span>
                  </Typography>
                </CardHeader>
                <CardBody className="p-0">
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                      </span>
                      <Typography className="font-normal">{item.benefits01}</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                      </span>
                      <Typography className="font-normal">{item.benefits02}</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                      </span>
                      <Typography className="font-normal">{item.benefits03}</Typography>
                    </li>             
                  </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                </CardFooter>
              </Card>
                </Link>
              )
            }
        </div>


      </div>
        
    );
};

export default Membership;