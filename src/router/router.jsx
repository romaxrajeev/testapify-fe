import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import BasicLayout from "../layout/BasicLayout";
import HomePage from "../pages/HomePage";
import PlaygroundPage from "../pages/PlaygroundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
    errorElement: <h1>An Error Occured</h1>,
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "/user/playground",
        element: <PlaygroundPage />,
      },
    ],
    errorElement: <h1>An Error Occured in User</h1>,
  },
]);
