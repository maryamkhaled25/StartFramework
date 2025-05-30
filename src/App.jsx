import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';

function App() {


  let routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
      ]
    }
  ])

  return (

    <RouterProvider router={routes} />

  )
}

export default App
