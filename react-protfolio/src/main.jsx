
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <AboutMe />
            },
            {
                path: 'portfolio',
                element: <Portfolio />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'resume',
                element: <Resume />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode> 
  <RouterProvider router={router} />
    </React.StrictMode>
);