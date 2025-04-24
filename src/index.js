import React , {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider ,Outlet } from "react-router";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));
let AppLayout = () => {

  const [userName, setUsername] = useState();

  useEffect(()=>{
      const data = {
        name: "Mujtaba Sayyed",
      }
      setUsername(data.name)
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{LoggedInUser:userName, setUsername}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement : <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: 
        <Suspense fallback={<div>Loading...</div>}>
        <About/>
        </Suspense>,
      },
      {
        path: "/contact",
        element: <Suspense fallback={<div>Loading...</div>}>
                <Contact/>
                </Suspense>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<div>Loading...</div>}>
                <Grocery/>
                </Suspense>,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<div>Loading...</div>}>
                <Cart/>
                </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <Suspense fallback={<div>Loading...</div>}>
                <RestaurantMenu/>
                </Suspense>,
      },
    ]
  },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={BrowserRouter} />);
