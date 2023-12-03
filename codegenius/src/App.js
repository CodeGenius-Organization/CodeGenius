import React from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from './context/context';
import { ContextProviderQuestion } from './context/contextQuestion';

function App() {
  return (
    <>
    <ContextProviderQuestion>
      <ContextProvider>
        <AppRoutes/>
        <ToastContainer/>
      </ContextProvider>
    </ContextProviderQuestion>
    </>
  );
}

export default App;