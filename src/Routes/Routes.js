import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main"
import Appointment from "../Pages/Appointment/Appointment";
import AvailableAppointment from "../Pages/Appointment/AvailableAppointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import Payment from "../Pages/Dashboard/Payment";
import Home from "../Pages/home/Home"
import Login from "../Pages/Login/Login";
import DisplayError from "../Pages/Shared/DisplayError";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/categories',
                element: <Appointment></Appointment>
            },
            {
                path: '/categories/Horror',
                element: <AvailableAppointment></AvailableAppointment>,
                loader: () => fetch(`https://bookmart-xi.vercel.app/categories/Horror`)
            },
            {
                path: '/categories/Comedy',
                element: <AvailableAppointment></AvailableAppointment>,
                loader: () => fetch(`https://bookmart-xi.vercel.app/categories/Comedy`)
            },
            {
                path: '/categories/Thriller',
                element: <AvailableAppointment></AvailableAppointment>,
                loader: () => fetch(`https://bookmart-xi.vercel.app/categories/Thriller`)
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addBooks',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manageBooks',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://bookmart-xi.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])

export default routes;