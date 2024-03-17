import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EmployeeDetail from './EmployeeDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employee/:id",
    element: <EmployeeDetail />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>    
  </React.StrictMode>
);
