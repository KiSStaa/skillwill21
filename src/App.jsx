import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import routes from './routes';
import './App.css'

function App() {
  return (
      <RouterProvider router={createBrowserRouter(routes)}>
        <Header />
      </RouterProvider>
  );
}

export default App;