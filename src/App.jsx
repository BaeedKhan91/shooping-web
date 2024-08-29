import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Initial from './pages/initial-page/initial'
import Shop from './pages/home-page/home'
import Header from './pages/header-page/header'
import About from './pages/about-page/about';
import Contact from './pages/contact-page/contact';
import Login from './pages/login-page/login'
import './index.css'
import './App.css'



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      
      children: [
        {
          path: "/",
          element: <Initial />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
          },
          {
            path: "/initial",
            element: <Initial />,
            },
      ]
    },  
        
  ]);

    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/"
      element={<Header />
      }>
      <Route index element={<Initial />} />
      <Route path="/home" element={<Home />} />
      <Route  path='/contact' element={<Contact/>} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      </Route>

      
    </Routes>
    </BrowserRouter> */}
    </>
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );