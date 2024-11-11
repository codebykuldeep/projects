import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import FormPage from './components/form-page/FormPage';
import AppLayout from './components/UI/AppLayout';
import ProductPage from './components/product-page/ProductPage';
import ProductLayout from './components/UI/ProductLayout';

const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'products',
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
        ]
      }
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
