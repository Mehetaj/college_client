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
        element: <College />
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
        element: <Review />
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
