import React from 'react';
import './App.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import Home from './component/pages/home/Home';

function App() {
  return ( 
    <PrimeReactProvider>
<div className="App">
   <Home/> 
    </div>
    </PrimeReactProvider>
  );
}

export default App;
