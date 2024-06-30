import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoMdPricetags } from "react-icons/io";
import { TiStarHalfOutline } from "react-icons/ti";

/* eslint-disable react/prop-types */
const TabsCard = ({item}) => {
  console.log(item);
    const {description,image,price,rating,title,_id} = item
  return (
    <div className="grid mb-8 mt-4 ml-6" >
      <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
        className="w-96 h-80"
          src={image}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
       
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-semibold">
            {title}
          </Typography>
         
        </div>
        <Typography color="gray">
          {description}
        </Typography>
        <div className="group mt-8 flex flex-wrap items-center justify-evenly">
          
        <div className="flex items-center gap-2">
          <Typography color="black" className="flex text-md font-bold items-center gap-1"><IoMdPricetags />Price:  </Typography>
          {price}
          </div>

          <div className="flex items-center gap-2">
          <Typography color="black" className="flex text-md font-bold items-center gap-1"><TiStarHalfOutline />Rating:  </Typography>
          {rating}
          </div>

        </div>
      </CardBody>
      <CardFooter className="pt-3">
      <Link to={`/mealDetails/${_id}`}>
        <Button size="lg" fullWidth={true}>
          Details
        </Button>
      </Link>
      </CardFooter>
    </Card>
    </div>
  );
};

export default TabsCard;

{/* <Link to={`/mealDetails/${_id}`}><button className="btn btn-wide btn-outline mt-2">Details</button></Link> */}