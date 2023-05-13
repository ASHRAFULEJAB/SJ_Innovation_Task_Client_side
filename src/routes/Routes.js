import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      // {
      //   path: "/pre-nft",
      //   element: <NftRights />,
      // },
      // {
      //   path: "/marketplace",
      //   element: <MarketPlace />,
      // },
      // {
      //   path: "/auction",
      //   element: <Auction />,
      // },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
