 import React from 'react'
import './navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import uploadicon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from'../../assets/jack.png'

const Navbar = ({setSidebar}) => {
  return (
      <nav className='flex-div'>
          
          
          <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={()=>setSidebar(prev => prev === false ? true : false)}   src={menu_icon} alt="" />
              <img className='logo' src={logo} alt="" />
              
          </div>
          <div className="class-middle flex-div">
              <div className="search-box flex-div">
                <input className='ab' type="text" placeholder='search' />
                  <img src={search_icon} alt="" />
                  
              </div>
              
              

          </div>
          <div className="nav-right flex-div">
              <img src={uploadicon} alt="" />
              <img src={more_icon} alt="" />
              <img src={notification_icon} alt="" />
              <img src={profile_icon}className='user-icon' alt="" />
              
          </div>
      </nav>
//       <>
//       <nav className="flex-div">
//   <div className="nav-left flex-div">
//     <img className="menu-icon" src={menu_icon} alt="Menu" />
//     <img className="logo" src={logo} alt="Logo" />
//   </div>

//   <div className="nav-middle flex-div">
//     <div className="search-box flex-div">
//       <input type="text" placeholder="Search" />
//       <img src={search_icon} alt="Search Icon" />
//     </div>
//   </div>

//   <div className="nav-right flex-div">
//     <img src={uploadicon} alt="Upload" />
//     <img src={more_icon} alt="More Options" />
//     <img src={notification_icon} alt="Notifications" />
//     <img src={profile_icon} className="user-icon" alt="User Profile" />
//   </div>
// </nav>
// </>
  )
}

export default Navbar

