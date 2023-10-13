import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import {BrowserRouter,RouterProvider,ScrollRestoration,createBrowserRouter,Outlet} from 'react-router-dom'
import Cart from "./pages/Cart";
import { productsData } from "./components/Api";
import ProductDesc from "./components/ProductDesc";

const Layout =() =>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>,
        loader: productsData
      },
      {
        path: '/product/:id',
        element: <ProductDesc/>,
        
      },
        {
          path: '/cart',
          element: <Cart/>
        }
      
    ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router ={router}/>
      {/* <Header/>
      <Home/>
      <Footer/> */}
    </div>
  );
}

export default App;
