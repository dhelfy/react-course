import About from "../pages/About";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage";
import NoPage from "../pages/NoPage";
import PostPage from "../pages/PostPage/PostPage";
import Posts from "../pages/Posts";

let private_routes_arr = [
    {path: "index", element: HomePage},
    {path: "blog/:id", element: PostPage},
    {path: "about", element: About},
    {path: "*", element: NoPage},
    {path: "blog", element: Posts},
]

let public_routes_arr = [
    {path: "*", element: AuthPage}
]

export {private_routes_arr, public_routes_arr}