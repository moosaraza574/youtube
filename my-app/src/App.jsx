 import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/about"
import Navbar from "./componentss/navbar/navbar"
import Sidebar from "./componentss/Sidebar/Sidebar"
//  import Video from "./pages/videos/video"
const App = () => {
  return (
    <div>
    
      <Navbar />
      {/* { <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video' element={<Video/>}/>
        </Routes>
        </BrowserRouter> } */}
      <Sidebar/>
      <About/>
    </div>
  )
}

export default App
