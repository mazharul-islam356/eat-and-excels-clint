import { Input, Textarea, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Authentication/Firebase/AuthProvider";
import Swal from "sweetalert2";

const AddMeal = () => {
  const { register, handleSubmit:handleSubmit1 } =useForm()
  const {register:register2, handleSubmit:handleSubmit2}=useForm()


  // time and date

 const {user} = useContext(AuthContext)

  const [currentTime, setCurrentTime] = useState(new Date());
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);






  const onSubmit1 = (data) => {
    console.log(data);

    const mealData = {

      title: data.title,
      description: data.description,
      ingredients: data.ingredients,
      image: data.image,
      type: data.type,
      price:  parseInt(data.price),
      rating: parseInt(data.rating),
      name: data.name,
      like: parseInt(data.like),
      email: data.email,
      reviews: parseInt(data.reviews),
      time: data.time,
      date: data.date,

    }
    



    console.log(data);
    axiosSecure.post('/allData', mealData)
      .then(response => {console.log('Data submitted successfully:', response.data)
      if(response.data.acknowledged === true){
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${data.title} Added succesfully`,
            showConfirmButton: false,
            timer: 1550
          });
          
    }
    })
      .catch(error => console.error('Error submitting data:', error));

  };
  
  const onSubmit2 = (data) => {

    console.log(data);
    // axiosSecure.post('/upcomming', data)
    //   .then(response => {console.log('Data submitted successfully:', response.data)
    //   if(response.data.acknowledged === true){
    //     Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: `${data.title} Added succesfully`,
    //         showConfirmButton: false,
    //         timer: 1550
    //       });
          
    // }
    // })
    //   .catch(error => console.error('Error submitting data:', error));
  };
  

    return (
        <div>
            <h2 className="text-3xl text-center mt-8 underline font-serif font-semibold">Add Meal</h2>
           <form>
          <div className="lg:flex gap-10 justify-evenly">
            <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Meal title 
                </Typography>
                <Input
                  {...register("title")}
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Meal image
                </Typography>
                <Input
                name="image2"
                {...register("image")}
                 
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Ingredients
                </Typography>
                <Input
                {...register("ingredients")}
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Meal type
                </Typography>
                <select
                  defaultValue={"defult"}
                  {...register("type")} 
                  className="select select-bordered w-96"
                >
                  <option value="defult" disabled>
                    Meal type
                  </option>
                  <option>breakfast</option>
                  <option>lunch</option>
                  <option>dinner</option>
                </select>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Price
                </Typography>
                <Input
                  {...register("price")} 
                  size="lg"
                  placeholder=""
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                Description
                </Typography>
                <div className="w-96">
                  <Textarea {...register("description")} 
                  

                  label="Description" />
                </div>
              </div>
            </div>
            <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Rating
                </Typography>
                <Input
                {...register("rating")}
                  
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Admin name
                </Typography>
                <Input
                {...register("name")} 
                  defaultValue={user?.displayName}
                  size="lg"
                  
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Admin email
                </Typography>
                <Input
                {...register("email")} 
                defaultValue={user?.email}
                  size="lg"
                  placeholder=""
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />

                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Like
                </Typography>
                <Input
                  {...register("like")} 
                  size="lg"
                  placeholder=""
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Reviews
                </Typography>
                <Input
                  {...register("reviews")} 
                  size="lg"
                  placeholder=""
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <div className="flex gap-4">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Time:
                </Typography>
                <input {...register("time")}
                  type="text" value={currentTime.toLocaleTimeString()} />
                {/* <p {...register("time")} >{currentTime.toLocaleTimeString()}</p> */}

                <div className="divider divider-horizontal"></div>
              
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Date:
                </Typography>

                <input {...register("date")}
                  type="text" value={currentTime.toLocaleDateString()} />

                </div>
                
              </div>
              
            </div>
   
          </div>
          <div className="flex gap-20 mb-8 mt-2">

          <button onClick={handleSubmit1(onSubmit1)} className="btn btn-outline btn-wide btn-sm lg:ml-[300px]">Add  meal</button>
          <button onClick={handleSubmit2(onSubmit2)} className="btn btn-outline btn-wide btn-sm">Upcoming  meal</button>

       
          </div>
        </form>
        </div>
       
    );
};

export default AddMeal;