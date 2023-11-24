import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TabsCard = ({item}) => {
    const {mealTitle,description,mealImage,rating,price,_id} = item
  return (
    <div className="grid lg:grid-cols-3" >
      <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
        <figure>
          <img
            src={mealImage}
            alt="#"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{mealTitle}</h2>
          <span>{description}</span>
          <span>Price: ${price}</span>
          <span>Ratting: {rating}</span>
            <Link to={`/mealDetails/${console.log(_id)}`}><button className="btn btn-outline">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default TabsCard;
