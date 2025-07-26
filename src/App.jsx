import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './layout/Layout';
import Home from "./Home/Home";
import About from "./about/About";
import Projects from './projects/projects';
import Testimonials from './Testimonials/Testimonials';
import Contact from './contact us/Contact';

function App() {
     const router = createBrowserRouter([
      {path:"", element:<Layout/> ,children:[
        {index:true,element:<Home/>},
        {path:"about",element:<About/>},
        {path:"projects",element:<Projects/>},
        {path:"testimonials",element:<Testimonials/>},
        {path:"contact",element:<Contact/>},
      ]}
     ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
