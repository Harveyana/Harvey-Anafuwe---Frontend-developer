import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import './App.css'


// const root = ReactDOM.createRoot(document.getElementById('root'));

const rootElement = document.getElementById('root');
if (rootElement) {
   const root = ReactDOM.createRoot(rootElement);
   root.render(
 <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
 </React.StrictMode>
);
   // Now you can render your app using the root instance
 } else {
   console.error("Root element 'root' not found in the document.");
 }
