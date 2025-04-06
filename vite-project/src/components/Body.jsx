
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'




const Body = () => {
  
  

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    },
    {
      path : "/browse",
      element : <Browse/>
    }
  ])
 //we want to call this onAuthStateChanged api only once , so we will use useEffect
 
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body