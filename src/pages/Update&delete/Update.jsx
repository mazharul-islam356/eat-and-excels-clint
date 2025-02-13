import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Input, Textarea, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authentication/Firebase/AuthProvider";
import { useLoaderData } from "react-router-dom";


const Update = () => {

    const update = useLoaderData()
    console.log(update);
    

  const {title,image,description,ingredients,like,price,rating,reviews,type} = update



    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit } = useForm();
    const {user} = useContext(AuthContext)
    
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
  const onSubmit = (data) => {
    axiosSecure.put('/allData', data)
      .then(response => {console.log('Data updated successfully:', response.data)
      if(response.data.acknowledged === true){
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${data.title} updated succesfully`,
            showConfirmButton: false,
            timer: 1550
          });         
    }
    })
      .catch(error => console.error('Error submitting data:', error));

 

  };




    return (
        <div>
        <h2 className="text-3xl text-center mt-8 underline font-serif font-semibold">Update Meal</h2>
       <form onSubmit={handleSubmit(onSubmit)}>
      <div className="lg:flex gap-10 justify-evenly">
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 w-10 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Meal title 
            </Typography>
            <Input
              {...register("title")}
             defaultValue={title}
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
             defaultValue={image}
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
            defaultValue={ingredients}
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
              defaultValue={type}
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
              defaultValue={price}
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
              <Textarea
              defaultValue={description}
               {...register("description")}  label="Description" />
            </div>
          </div>
        </div>
        <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">

          <Typography variant="h6" color="blue-gray" className="-mb-3">
              Rating
            </Typography>
            <Input
            defaultValue={rating}
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
            defaultValue={like}
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
            defaultValue={reviews}
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
      <button className=" btn lg:ml-[400px] btn-wide mb-10 mt-2 btn-outline">
        Update Meal
      </button>
     
      </div>
    </form>
    </div>
    );
};

export default Update;