import { createBrowserRouter } from "react-router-dom";
import LayOut from "../MainLayout/LayOut";
import Home from "../pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Meals from "../pages/Meals/Meals";
import UpcomingMeals from "../pages/UpcomingMeals/UpcomingMeals";
import SignUp from "../Authentication/SignUp/SignUp";


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
                path:'/upComingMeals',
                element:<UpcomingMeals></UpcomingMeals>
            }
          ]
        },
      ]);


