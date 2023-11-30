import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TabsCard = ({item}) => {
  console.log(item);
    const {date,description,email,image,ingredients,like,name,price,rating,reviews,time,title,type,_id} = item
  return (
    <div className="grid mb-8 mt-4 lg:grid-cols-3" >
      <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-80"
            src={image}
            alt="#"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-center text-center">{title}</h2>
          <span>{description}</span>
          <span>Price: ${price}</span>
          <span>Ratting: {rating}</span>
            <Link to={`/mealDetails/${_id}`}><button className="btn btn-outline">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default TabsCard;
