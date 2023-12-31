import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TabsCard = ({item}) => {
  console.log(item);
    const {description,image,price,rating,title,_id} = item
  return (
    <div className="grid mb-8 mt-4  lg:grid-cols-3" >
      <div className="card w-96 p-4 pt-10 h-[600px] bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-80"
            src={image}
            alt="#"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title flex justify-center text-center">{title}</h2>
          <span className="opacity-80">{description}</span>
          <span className="font-serif font-semibold">Price: ${price}</span>
          <span className="font-serif font-semibold">Ratting: {rating}</span>
            <Link to={`/mealDetails/${_id}`}><button className="btn btn-wide btn-outline mt-2">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default TabsCard;
