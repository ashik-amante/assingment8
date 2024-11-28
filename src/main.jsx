import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Listedbook from './components/Listedbook/Listedbook.jsx';
import Bookdetails from './components/BookDetails/Bookdetails.jsx';
import Pagetoread from './components/PageToread/Pagetoread.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listed',
        element: <Listedbook></Listedbook>,
        loader:()=> fetch('../books.json')
        
      },
      {
        path: '/bookdetail/:bookId',
        element:<Bookdetails></Bookdetails>,
        loader:()=> fetch('../books.json')
      },
      {
        path: '/page',
        element: <Pagetoread></Pagetoread>,
        loader:()=> fetch('../books.json')
      },
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
