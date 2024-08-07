import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../Authentication/Firebase/AuthProvider";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Textarea } from "@material-tailwind/react";

const MealDetails = () => {
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const [reviewData,setReviewData] = useState()

  const handleText = e => {
    e.preventDefault();
    const reviews = e.target.review.value;
    const reviewData = reviews; 
    setReviewData(reviews);
    console.log(reviewData);

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
  };
  
 

  const [meal,setMeal] = useState()

    const {id} = useParams()
    console.log(id)

    console.log(id);

    const detailsData = useLoaderData()
    console.log(detailsData);
    const navigate = useNavigate()

    
    const handleSend = (meal) =>{
      const requestedMeal = {
        mealId: meal._id,
        email: user?.email,
        mealTitle: meal.title
        
      }
  
      axiosSecure.post('/send',requestedMeal)
      .then(res=>{
        console.log(res.data)
  
        if(res.data.acknowledged === true && user){
          Swal.fire({
              position: "center",
              icon: "success",
              title: `Send succesfully`,
              showConfirmButton: false,
              timer: 1550
            });         
      }else{
        toast.error('Please login for send request')
        navigate('/login')
      }
      })
        
    
    }


    const handleLike = () =>{

      axiosSecure.put('/like',id)
      .then(res=>{console.log(res.data)
        alert('like update')
      })

    }

    // axiosPublic.put('/like', id)
    //   .then(response => {console.log('Data submitted successfully:', response.data)
    //   if(response.data.acknowledged === true){
    //     Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: `${id.title} Added succesfully`,
    //         showConfirmButton: false,
    //         timer: 1550
    //       });         
    // }
    // })
    //   .catch(error => console.error('Error submitting data:', error));
   
  

    

useEffect(()=>{
    const findProducts = detailsData.find((product)=>product._id === id)
    setMeal(findProducts)
},[id,detailsData])
console.log(meal);
const { user } = useContext(AuthContext);


  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img src={meal?.image} className="lg:max-w-sm rounded-2xl shadow-2xl lg:mr-4" />
          <div className="divider lg:divider-horizontal text-7xl"><MdKeyboardDoubleArrowRight className="opacity-60"></MdKeyboardDoubleArrowRight></div>
          <div className="ml-3">
        
            <h1 className="text-5xl mb-4 font-bold">{meal?.title}</h1>
            <h1 className="text-2xl">{user?.displayName}</h1>
            <p className="py-6 w-[36em]">{meal?.description}</p>
            <p className="text-xl">{meal?.mealTitle}</p>
         <h3><span className="font-serif font-semibold">Rating:</span> {meal?.rating} </h3>
         <h3><span className="font-serif font-semibold">Price:</span> ${meal?.price} </h3>
         <h3><span className="font-serif font-semibold">Post time:</span> {meal?.time} </h3>
        {user &&  <div className="text-xl my-4">


         {/* <button onClick={handleLike}><SlLike /></button> */}


         </div>}
         <div className="text-xl my-4">
         <button className="btn btn-sm btn-outline" onClick={()=>handleSend(meal)} >Send request<VscSend /></button>
         </div>

            <Link to='/AllMeals'><button className="btn btn-wide btn-outline">See All</button></Link>
          </div>
        </div>
      </div>

      {/* ---------------review-------------- */}
      <form onSubmit={handleText}>

      <div className="mt-10 space-y-8">
        <h1 className="text-2xl font-semibold font-serif text-center">-: Share your review :-</h1>
      <div className="w-6/12 mx-auto">
      <Textarea name="review" placeholder="Share your review"  ></Textarea>
      </div>
      </div>
        <button  className="btn btn-outline mt-6 mb-8 lg:ml-[585px] ml-20 btn-wide btn-sm">Submit</button>
      </form>
    </div>
  );
};

export default MealDetails;
