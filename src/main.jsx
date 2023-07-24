import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import SignIn from './Pages/Shared/Authentication/Signin/SignIn';
import Signup from './Pages/Shared/Authentication/signup/Signup';
import AuthProvider from './AuthProvider/AuthProvider';
import Colleges from './Pages/Colleges/Colleges';
import College from './Pages/Colleges/College';
import Admission from './Pages/Admission/Admission';
import Form from './Pages/Form/Form';
import MyCollege from './Pages/MyCollege/MyCollege';
import Review from './Pages/Review/Review';
import Reset from './Pages/Shared/Authentication/Reset/Reset';
import Profile from './Pages/Profile/Profile';
import PrivateRoute from './PrivateRoute';
import Error from './Pages/Shared/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/colleges',
        element: <Colleges />
      },
      {
        path: '/colleges/:_id',
        loader: ({ params }) => fetch(`http://localhost:4000/colleges/${params._id}`),
        element: <PrivateRoute><College /></PrivateRoute>
      },
      {
        path: '/admission',
        loader: () => fetch('http://localhost:4000/colleges'),
        element: <Admission />
      },
      {
        path: '/admission/:id',
        loader: () => fetch('http://localhost:4000/colleges'),
        element: <Form />
      },
      {
        path: '/mycollege',
        loader: () => fetch("http://localhost:4000/admit"),
        element: <MyCollege />
      },
      {
        path: '/review',
        element: <PrivateRoute><Review /></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      }
    ]
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/reset',
    element: <Reset />
  },
  {
    path: '*',
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='w-full md:w-[90%] mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
