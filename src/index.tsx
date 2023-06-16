import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";


import Home from "./navigation/home.component";
import Profile from "./navigation/application/profile.componenet";
import AppLayout from "./layout/app-layout.component";
import Dashboard from "./navigation/application/dashboard.component";
import DefaultLayout from "./layout/default-layout.component";
import Error from "./navigation/Error.component";




const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
    {
        path: "/app",
        element: <AppLayout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: "profile",
                element: <Profile/>
            }
        ]
    },
    {
        path: "/500",
        element: <Error errorCode={500}/>
    },
    {
        path: "*",
        element: <Error errorCode={404}/>
    }
]);
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);

