import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import AllProducts from "../pages/AllProducts/AllProducts";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllPosts from "../Components/AllPosts/AllPosts";
import Details from "../Components/AllPosts/Details/Details";
import { Suspense } from "react";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/blog',
        element:
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
      },
      {
        path: '/allPost',
        element: <AllPosts></AllPosts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/details/:id',
        element:
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      },
      {
        path: '/allProducts',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);