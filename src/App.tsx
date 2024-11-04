import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./component/pages/home/Home";
import Billspage from "./component/common/billui/Bill";
import Loancomponent from './component/common/billui/Loan';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

const App: React.FC = () => {
  return (
    <PrimeReactProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </PrimeReactProvider>
  );
};

export default App;