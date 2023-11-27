import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
   const [error,setError] = useState('')
   const navigatae = useNavigate()
   const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

// Google login
const {googleLogin} = useContext(AuthContext)
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


  const onSubmit = (data) => {
    console.log(data);

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
    if(email,pass){
      signInWithEmailAndPassword(auth,email,pass)
      .then(res=>{
        console.log(res.user)
        if(res.user){
           
          Swal.fire({
              position: "center",
              icon: "success",
              title: "Login succesfully",
              showConfirmButton: false,
              timer: 1550
            });
            navigatae('/')
      }
      })
      .catch(err=>setError(err.message))  
    }

  }; // your form submit function which will invoke after successful validation

  console.log(watch("example"));

  

  return (
    <div className="my-10">
      <h1 className="text-3xl text-center">Login Now!</h1>
      <div className="py-4 ml-[36rem]">
        <form
          className="card-body card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            Login
          </button>
          
          <button onClick={()=> handleGLogin(googleLogin)} className="btn mt-3">
               Continue With
            <FcGoogle className="text-xl"></FcGoogle>
          </button>

        <p>New to here? <Link className="underline" to='/signUp' >Sign Up</Link> Now</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
