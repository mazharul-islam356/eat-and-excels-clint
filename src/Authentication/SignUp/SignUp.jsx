import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {

    const {signUp,googleLogin} = useContext(AuthContext)
  const navigatae = useNavigate()
  const axiosPublic = useAxiosPublic()


  const handleGLogin = (media) => {
    media()
    .then(res=>{
      console.log(res.user)
      const userInfo = {
        email: res.user.email,
        name: res.user.displayName
      }
      axiosPublic.post('/users',userInfo)
      .then(res=>{
        console.log(res.data)
        navigatae('/')
      })
    })
    .catch(err=>console.log(err))
  }


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


      const onSubmit = (data) => {

    const name = data.name;
    const email = data.email;
    const pass = data.pass;
    console.log(name,email,pass);
    if(pass.length < 6){
      toast.error('Password should be at least 6 characters')
      return
    }
     else if(!/[A-Z]/.test(pass)){
      toast.error('Please include at least one uppercase letter in your password')
      return
    }
    else if (!/[!@#$%^&*()_+\-=[{};':"|,.<>/?]+/.test(pass)){

      toast.error('Please include Special Characters in your password')
      return
    }

    signUp(email,pass)
    .then(result=>{
        console.log(result.user)
        if(result.user){
          // user entry on database
          const userInfo = {
            name: name,
            email: email

          }
          axiosPublic.post('/users',userInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log('user added to the database');
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created succesfully",
                showConfirmButton: false,
                timer: 1550
              });
              navigatae('/login')
            }
          })
          
           
        }
    })
    .catch(err=>{
        console.log(err)
        if(err){
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Email already in use",
                showConfirmButton: false,
                timer: 1550
              });
        }
    })


 

      
  
      }; 
    
        // signUp(data)
        // .then(result=>console.log(result.user))
        // .catch(err=>console.log(err))
    


    return (
        <div className="my-10">
      <h1 className="text-3xl text-center">Sign Up Now!</h1>
      <div className="py-4 ml-[36rem]">
        <form
          className="card-body card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            placeholder="Your Name"
            className="input input-bordered"
            {...register("name")}
          />

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            placeholder="Email"
            className="input input-bordered"
            {...register("email")}
          />

          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
          type="password"
            placeholder="Password"
            className="input input-bordered"
            {...register("pass", { required: true })}
          />

          {errors.exampleRequired && <p>This field is required</p>}

          <button className="btn mt-2 btn-outline">
            Sign up
          </button>
          <button onClick={()=> handleGLogin(googleLogin)} className="btn mt-3">
               Continue With
            <FcGoogle className="text-xl"></FcGoogle>
            </button>
        <p>Already have an account? <Link className="underline" to='/login' >Login</Link> Now</p>
        </form>
      </div>
    </div>
    );
};

export default SignUp;