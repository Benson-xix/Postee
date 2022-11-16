import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Headers from './components/Headers'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import './App.css'
import Timeline from './pages/Timeline'
import Dm from './pages/Dm'
const App = () => {
    const routes = [
        { path: '/', id: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", component: <Home/>},
        { path: '/signup', id: "hfjjdijdkciowidwkjmckckkclckkscks", component: <SignUp/>},
        { path: '/login', id: "swuiodhvgdvgbkjdioiojeifjfkenfeje", component: <Login/>},
        { path: '/timeline', id: "hfhbbvhjjcskjcxnhiakkzlxnxnxkxxxbch", component: <Timeline/>},
        { path: '/dm', id: "bbuduhiwdijiwskcsmkcmkcmcmckmckmckckckcmck", component: <Dm/>},
    ]
  return (
    <>
    <Link to='/'>
     <Headers />
    </Link>
     
      
       <Routes>
    {routes.map(({id, component, path}, _) => <Route key={id} path={path} element={component} />)}
  </Routes>
    </>
   
  )
}

export default App