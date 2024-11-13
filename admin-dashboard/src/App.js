import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import FormPage from './components/form-page/FormPage';
import AppLayout from './components/UI/AppLayout';
import ProductPage from './components/product-page/ProductPage';
import ProductLayout from './components/UI/ProductLayout';
import { QueryClient, QueryClientProvider } from 'react-query';


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
          {
            path:'edit/:id',
            element:<FormPage/>
          },
        ]
      }
    ]
  }
])

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
