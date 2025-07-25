import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";


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
        }
    ]
  },
]);