import { ReactNode, lazy, Suspense } from "react";
import { LazyRouteFunction, RouteObject, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "../pages/layout";
import { getToken } from "../utils/auth";
import Login from "../pages/login";

const Home = lazy(() => import("../pages/home"))
const BlackList = lazy(() => import('../pages/blackList'))
const MyProvider = lazy(() => import('../pages/myProvider'))

const loader = () => {
  const isAuth = getToken();
  if (!isAuth) {
    throw new Response('', {
      status: 302,
      headers: {
        Location: '/login',
      },
    });
  }
  return null;
};

export const router: Application.AppRoute[] =
  [
    {
      path: "/",
      element: Layout,
      lazyFlag: false,
      children: [
        {
          path: "/home",
          lazyFlag: true,
          element: Home,
        },
        {
          path: "myProvider",
          lazyFlag: true,
          element: MyProvider,
          loader: loader,
        },
        {
          path: "blackList",
          lazyFlag: true,
          element: BlackList,
          loader: loader,
        },
      ],
    },
    {
      path: '/login',
      element: Login,
      lazyFlag: false,
    },
  ]
