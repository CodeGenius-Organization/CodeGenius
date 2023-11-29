import React from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from './context/context';

function App() {
  return (
    <>
    <ContextProvider>
    <AppRoutes/>
    <ToastContainer/>
    </ContextProvider>
    </>
  );
}

export default App;
