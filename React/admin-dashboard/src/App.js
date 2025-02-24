import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import FormPage from './components/form-page/FormPage';
import AppLayout from './components/UI/AppLayout';
import ProductPage from './components/product-page/ProductPage';
import ProductLayout from './components/UI/ProductLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { checkUser, checkUserAuthentication, routeProtection } from './util/utilFunctions';
import HomePage from './components/UI/HomePage';
import Login from './components/login/Login';
import ErrorPage from './components/UI/ErrorPage';
import EditPage from './components/form-page/EditPage'


const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<HomePage/>,
        loader:checkUserAuthentication,
        // loader:redirectRoute,
      },
      {
        path:'login',
        loader:checkUser,
        element:<Login/>,
      },
      {
        path:'products',
        loader:routeProtection,
        element:<ProductLayout/>,
        children:[
          {
            path:'',    
            element:<ProductPage/>
          },
          {
            path:'new',
            element:<FormPage/>
          },
          {
            path:'edit/:id',
            element:<EditPage/>
          },
        ]
      }
    ]
  }
])

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<ProductLayout/>,
//     children:[
//       {
//         index:true,  
//         element:<ProductPage/>
//       },
//       {
//         path:'new',
//         element:<FormPage/>
//       },
//       {
//         path:'edit/:id',
//         element:<FormPage/>
//       },
//     ]
//   }
// ])

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    </>
  );
}

export default App;
