import { NavLink, Outlet } from "react-router-dom";
import { RiProfileLine } from "react-icons/ri";
import { FaHourglassEnd, FaHouse } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { GiMeal } from "react-icons/gi";
import { MdRateReview } from "react-icons/md";
import { TbReservedLine } from "react-icons/tb";
import { MdUpcoming } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="flex lg:flex-row flex-col lg:w-10/12 mx-auto">
      <div className="w-64 bg-[#116A7B] text-white min-h-screen">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashBoard/adminProfile">
                  <CgProfile></CgProfile>
                  Admin profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/manageUser">
                  <MdManageAccounts />
                  Manage users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/addMeal">
                  <IoIosAddCircle></IoIosAddCircle>
                  Add meal
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/allMeal">
                  <GiMeal></GiMeal>
                  All meal
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/allReviews">
                  <MdRateReview></MdRateReview>
                  All reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/serveMeals">
                  <TbReservedLine></TbReservedLine>
                  Serve meals
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/upcoming">
                  <MdUpcoming></MdUpcoming>
                  Upcoming meals
                </NavLink>
              </li>
            </>
          ) : (
            <>

        <li>
            <NavLink to="/dashBoard/myProfile">
              <RiProfileLine></RiProfileLine>
              My Profile
            </NavLink>
          </li>
              <li>
                <NavLink to="/dashBoard/req">
                  <FaHourglassEnd></FaHourglassEnd>
                  Requested Meals
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/myReview">
                  <MdOutlineRateReview></MdOutlineRateReview>
                  My Reviews
                </NavLink>
              </li>

              
            </>
          )}

          <div className=" border-white my-4 border-[1px]"></div>


          <li>
            <NavLink to="/dashBoard/myProfile">
            <CiUser />
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <FaHouse></FaHouse>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/AllMeals">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
