import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Billspage from "./component/common/billui/Bill";
import Loancomponent from './component/common/billui/Loan';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mobilebill",
    element: <Billspage />,
  },
  {
    path: "/loan-payment",
    element: <Loancomponent />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
