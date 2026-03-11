import { createBrowserRouter, RouterProvider } from "react-router";
import AddArticle from "./components/AddArticle";
import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import RootLayout from "./components/RootLayout"
import UserProfile from "./components/UserProfile";
import AuthorProfile from "./components/AuthorProfile";
import { Toaster } from "react-hot-toast";




function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "userprofile",
          element: <UserProfile />,
        },
        {
          path: "authorprofile",
          element: <AuthorProfile />,
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}/>
      <RouterProvider router={routerObj} />
    </>
);
}

export default App;