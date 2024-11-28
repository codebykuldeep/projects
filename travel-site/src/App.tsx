import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import AppLayout from './components/UI/AppLayout';
import SignUp from './components/UserPage/SignUp';
import LoginPage from './components/UserPage/LoginPage';
import DetailPage from './components/DetailPage/DetailPage';
import HotelLayout from './components/HotelPage/HotelLayout';
import SearchLayout from './components/Searchpage/SearchLayout';
import ErrorPage from './components/UI/ErrorPage';

const router =createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'search',
        element:<SearchLayout/>,
      },
      {
        path:'search/:id',
        element:<DetailPage/>,
      },
      {
        path:'hotel',
        element:<HotelLayout/>
      }
    ]
  },
  {
    path:'/login',
    element:<LoginPage/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
