import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../../Authentication/Firebase/AuthProvider";
import { SlLike } from "react-icons/sl";
import { VscSend } from "react-icons/vsc";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const MealDetails = () => {
  const axiosPublic = useAxiosPublic()

  const [reviewData,setReviewData] = useState()

  const handleText = e =>{
    e.preventDefault();
    const reviews = e.target.review.value
    setReviewData(reviews)
  }
  const revieww = {reviewData}  
  console.log(revieww);
  
  const handleReview = () =>{
   
    axiosPublic.post('/reviews',{reviewData})
    .then(response => {console.log('Data submitted successfully:', response.data)
      if(response.data.acknowledged === true){
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Grateful for your feedback.`,
            showConfirmButton: false,
            timer: 1550
          });
          
    }
    })

  }


  const [meal,setMeal] = useState()

    const {id} = useParams()
    console.log(id)

    const detailsData = useLoaderData()
    console.log(detailsData);

useEffect(()=>{
    const findProducts = detailsData.find((product)=>product._id === id)
    setMeal(findProducts)
},[id,detailsData])
console.log(meal);

  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={meal?.image} className="max-w-sm rounded-2xl shadow-2xl mr-4" />
          <div>
        
            <h1 className="text-5xl mb-4 font-bold">{meal?.title}</h1>
            <h1 className="text-2xl">{user?.displayName}</h1>
            <span className="py-6">{meal?.description}</span> <br /> <br />
            <p className="text-xl">{meal?.mealTitle}</p>
         <h3><span className="font-serif font-semibold">Rating:</span> {meal?.rating} </h3>
         <h3><span className="font-serif font-semibold">Price:</span> ${meal?.price} </h3>
         <h3><span className="font-serif font-semibold">Post time:</span> 05.10 </h3>
        {user &&  <div className="text-xl my-4">
         <button><SlLike /></button>
         </div>}
         <div className="text-xl my-4">
         <button><VscSend /></button>
         </div>

            <Link to='/AllMeals'><button className="btn btn-outline">See All</button></Link>
          </div>
        </div>
      </div>

      {/* ---------------review-------------- */}
      <form onSubmit={handleText}>

      <div className="mt-10 space-y-8">
        <h1 className="text-2xl font-bold text-center">Share your review</h1>
      <textarea name="review" placeholder="Share your review" className="textarea shadow-xl lg:ml-[550px] textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
      </div>
        <button onClick={handleReview} className="btn btn-outline mt-6 mb-8 lg:ml-[585px] btn-wide btn-sm">Submit</button>
      </form>
    </div>
  );
};

export default MealDetails;
