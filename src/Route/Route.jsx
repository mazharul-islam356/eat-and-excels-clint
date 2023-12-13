import { createBrowserRouter } from "react-router-dom";
import LayOut from "../MainLayout/LayOut";
import Home from "../pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Meals from "../pages/Meals/Meals";
import SignUp from "../Authentication/SignUp/SignUp";
import MealDetails from "../pages/Home/Banner/Meal/MealDetails";
import AllMeals from "../pages/Meals/AllMeals";
import DashBoard from "../MainLayout/DashBoard";
import MyProfile from "../pages/DashBoard/MyProfile/MyProfile";
import Request from "../pages/DashBoard/MyProfile/Request";
import MyReview from "../pages/DashBoard/MyReview";
import ManageUser from "../pages/DashBoard/MyProfile/ManageUser";
import AddMeal from "../pages/DashBoard/MyProfile/AddMeal";
import AllMeal from "../pages/DashBoard/MyProfile/AllMeal";
import AllReviews from "../pages/DashBoard/MyProfile/AllReviews";
import ServeMeals from "../pages/DashBoard/MyProfile/ServeMeals";
import { QueryClient } from "@tanstack/react-query";
import Update from "../pages/Update&delete/Update";
import Payment from "../pages/Payment/Payment";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Upcoming from "../pages/DashBoard/MyProfile/Upcoming";
import AdminProfile from "../pages/DashBoard/MyProfile/AdminProfile";
import ErrorPage from "../pages/Error/ErrorPage";
import Profile from "../pages/DashBoard/MyProfile/Profile";
import Contact from "../pages/contact/Contact";




export const queryClient = new QueryClient();
export const router = createBrowserRouter([
        {
          path: "/",
          element: <LayOut></LayOut>,
          children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/meals',
                element:<Meals></Meals>
            },
            {
                path:'/allMeals',
                element:<AllMeals></AllMeals>
            },
            
           {
            path: '/mealDetails/:id',
            element:<MealDetails></MealDetails>,
            loader: () => fetch('https://assingment-12-server-roan.vercel.app/allData')
           },
        
           {
            path: '/payment/:id',
            element:<PrivetRoute><Payment></Payment></PrivetRoute>,
           
            
           },
           {
            path: '/contact',
            element:<Contact></Contact>,
           
            
           }
          ]
        },
        // admin route
        {
            path:'/dashBoard',
            element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
            children:[
                {
                path:'profile',
                element:<Profile></Profile>
            },
                {
                path:'myProfile',
                element:<MyProfile></MyProfile>
            },
            {
                path:'req',
                element:<Request></Request>
            },
            {
                path:'myReview',
                element:<MyReview></MyReview>
            },
            {
                path:'manageUser',
                element:<ManageUser></ManageUser>
            },
            {
                path:'addMeal',
                element:<AddMeal></AddMeal>
            },
            {
                path:'allMeal',
                element:<AllMeal></AllMeal>
            },
            {
                path:'allReviews',
                element:<AllReviews></AllReviews>
            },
            {
                path:'serveMeals',
                element:<ServeMeals></ServeMeals>
            },
            {
                path:'update/:id',
                element:<Update></Update>,
                loader: ({params})=> fetch(`https://assingment-12-server-roan.vercel.app/allData/${params.id}`)
            },
            {
                path:'upcoming',
                element:<Upcoming></Upcoming>
            },
            {
                path:'adminProfile',
                element:<AdminProfile></AdminProfile>
            }
           
        ]
        },
        {
            path: "*",
            element: <ErrorPage></ErrorPage>
          }
        

        


      ]);


