import React from 'react'
import './home.css'
import Sidebar from '../../componentss/Sidebar/Sidebar'
const home = (sidebar) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container${sidebar ? "" : 'large-container'}`}></div>
      <Feed/>
    </>
  )
}

export default home
