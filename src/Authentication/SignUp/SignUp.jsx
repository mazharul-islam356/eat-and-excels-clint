import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      }; // your form submit function which will invoke after successful validation
    
      console.log(watch("example"));



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
            {...register("example")}
          />

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            placeholder="Email"
            className="input input-bordered"
            {...register("example")}
          />

          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
          type="password"
            placeholder="Password"
            className="input input-bordered"
            {...register("exampleRequired", { required: true })}
          />

          {errors.exampleRequired && <p>This field is required</p>}

          <button className="btn mt-2 btn-outline">
            Login
          </button>
        <p>Already have an account? <Link className="underline" to='/login' >Login</Link> Now</p>
        </form>
      </div>
    </div>
    );
};

export default SignUp;