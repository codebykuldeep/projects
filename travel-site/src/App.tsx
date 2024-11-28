import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import AppLayout from './components/UI/AppLayout';
import SearchPage from './components/Searchpage/SearchPage';
import SignUp from './components/UserPage/SignUp';
import LoginPage from './components/UserPage/LoginPage';
import DetailPage from './components/DetailPage/DetailPage';
import HotelPage from './components/HotelPage/HotelPage';

const router =createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'search',
        element:<SearchPage/>,
      },
      {
        path:'detail',
        element:<DetailPage/>,
      },
      {
        path:'hotel',
        element:<HotelPage/>
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
