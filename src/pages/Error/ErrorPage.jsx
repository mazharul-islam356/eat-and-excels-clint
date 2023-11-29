import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="ml-[500px] pt-10">


   <img src="https://i.ibb.co/sg0nsK9/404-error.png" className="lg:w-[540px]" alt="err" />
   <Link to='/'><button className="btn ml-52">Go Home</button></Link>
  


            
        </div>
    );
};

export default ErrorPage;