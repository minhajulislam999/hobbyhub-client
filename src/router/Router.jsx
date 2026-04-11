import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllGroups from "../pages/AllGroups";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: MainLayout,
            children: [
                {
                    path: "/",
                    Component: Home
                },
                {
                    path: '/groups',
                    Component: AllGroups
                },
                {
                    path: 'login',
                    Component: Login
                },
                {
                    path: '/register',
                    Component: Register
                }
            ]
        }
    ]
)

export default router;