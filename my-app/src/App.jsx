 import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/about"
import Navbar from "./componentss/navbar/navbar"
import Sidebar from "./componentss/Sidebar/Sidebar"
import Feed from "./components/Feed/feed"
//  import Video from "./pages/videos/video"
const App = () => {

  const [sidebar, setsidebar] = useState(true);
  return (
    <div>
    
      <Navbar setsidebar={setsidebar } />
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        </Routes>
      </BrowserRouter> */}
      
      <Sidebar/>
      <About />
      <Feed/>
    
    </div>
  )
}

export default App
