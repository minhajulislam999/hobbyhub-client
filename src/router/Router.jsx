import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllGroups from "../pages/AllGroups";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateGroup from "../pages/CreateGroup";
import MyGroups from "../pages/MyGroups";
import GroupDetails from "../pages/GroupDetails";
import UpdateGroup from "../pages/UpdateGroup";
import PrivateRoute from "../components/PrivateRoute";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/groups", Component: AllGroups },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {
        path: "/createGroup",
        element: <PrivateRoute><CreateGroup /></PrivateRoute>
      },
      {
        path: "/myGroups",
        element: <PrivateRoute><MyGroups /></PrivateRoute>
      },
      {
        path: "/group/:id",
        element: <PrivateRoute><GroupDetails /></PrivateRoute>
      },
      {
        path: "/updateGroup/:id",
        element: <PrivateRoute><UpdateGroup /></PrivateRoute>
      },
    ],
  },
  { path: "*", Component: NotFound },
]);

export default router;