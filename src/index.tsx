import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './main.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Backdrop, CircularProgress} from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <BrowserRouter>
    <Suspense fallback={<Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}} open>
      <CircularProgress color="inherit"/>
    </Backdrop>}>
      <Routes>
        <Route path={'/'} element={<App/>}>

        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
