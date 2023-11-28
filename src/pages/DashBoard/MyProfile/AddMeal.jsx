import { Input, Textarea, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Authentication/Firebase/AuthProvider";
import Swal from "sweetalert2";

const AddMeal = () => {

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



    
    const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axiosSecure.post('/allData', data)
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
  

    return (
        <div>
            <h2 className="text-3xl text-center mt-8 underline font-serif font-semibold">Add Meal</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Textarea {...register("description")}  label="Description" />
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
                <input {...register("time")} type="text" value={currentTime.toLocaleTimeString()} />
                {/* <p {...register("time")} >{currentTime.toLocaleTimeString()}</p> */}

                <div className="divider divider-horizontal"></div>
              
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Date:
                </Typography>

                <input {...register("date")} type="text" value={currentTime.toLocaleDateString()} />

                </div>
                
                
              </div>
            </div>
          </div>
          <div className="flex mt-8">
          <button className=" btn lg:ml-44 btn-wide mb-10 mt-2 btn-outline">
            Add Meal
          </button>
          <button className="btn ml-20 btn-wide mb-10 mt-2 btn-outline">
            Upcoming Meal
          </button>
          </div>
        </form>
        </div>
       
    );
};

export default AddMeal;