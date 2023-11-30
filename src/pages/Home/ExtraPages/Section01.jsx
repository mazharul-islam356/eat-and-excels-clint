import { MdTableChart } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";



const Section01 = () => {
  return (
    <div>
     <h1 className="text-4xl rounded-3xl shadow-[#4c9fb0] shadow-sm  w-72 p-2 mx-auto text-center font-sans mt-10">Key Features</h1>

        <div className='lg:h-[400px]  rounded-lg mb-12'>
      <div className="grid lg:grid-cols-3 justify-center items-center lg:ml-14  ">
        {/* card01 */}
        <div className="card w-96 lg:mt-16 bg-base-100 hover:bg-[#CDC2AE] hover:text-white p-4 opacity-72 scale-95 hover:opacity-100 hover:scale-105 transition duration-300 ease-in-out">
          <div className="card-body">
            <div className='text-5xl  p-4 opacity-72 scale-95 hover:opacity-100 hover:scale-105 transition duration-300 ease-in-out text-black hover:text-white ml-28'>   <MdTableChart /></div>
            <div className='text-center text-xl font-semibold'>Dynamic Tab Navigation
</div>
            <div className='text-center'>Effortlessly navigate through our feature-rich website using our intuitive and dynamic tab system
</div>
            
          </div>
        </div>

        {/* card02 */}
        <div className="card w-96 lg:mt-16 bg-base-100 hover:bg-[#CDC2AE] hover:text-white p-4 opacity-72 scale-95 hover:opacity-100 hover:scale-105 transition duration-300 ease-in-out">
          <div className="card-body">
          <div className='text-5xl  p-4 opacity-72 scale-95 hover:opacity-100 hover:scale-105 transition duration-300 ease-in-out text-black hover:text-white ml-28'> <RiAdminFill /></div>
            <p className='text-center text-xl font-semibold'>Empowering Admin Control</p>
            <p className='text-center'>Take charge with our comprehensive admin dashboard, providing you the tools to manage and optimize your website effortlessly</p>
            
          </div>
        </div>

        {/* card03 */}
        <div className="card w-96 lg:mt-16 bg-base-100 hover:bg-[#CDC2AE] hover:text-white p-4 opacity-72 scale-95 hover:opacity-100 hover:scale-105 transition duration-300 ease-in-out">
          <div className="card-body">
          <div className='text-5xl  p-4 opacity-72 scale-95 hover:opacity-100 hover:scale-105 transition duration-300 ease-in-out text-black hover:text-white ml-28'> <FaUserCircle /></div>
            <p className='text-center text-xl font-semibold'>Seamless User Control</p>
          
            <p className='text-center'>Efficiently manage users with our user-friendly system, granting administrators the ability to oversee and tailor user experiences.</p>
          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section01;
