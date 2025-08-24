import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Contact from './components/Contact'
import Layout from '../Layout'
import { APIContextProvider } from './context/NewsContext.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
       {
        path:"terms",
        element:<Terms/>
      },
       {
        path:"contact",
        element:<Contact/>
      },
       {
        path:"privacy",
        element:<Privacy/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIContextProvider>
    <RouterProvider router={router}/>
    </APIContextProvider>
   
  </StrictMode>,
)
