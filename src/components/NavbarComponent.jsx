import React from 'react'
import "../style/navbarcomponent.css"
import Lonceng from "../assets/logo/lonceng.png"

const NavbarComponent = ({title}) => {
  return (
    <>
        <div className="navbar">
            <div><h3>{title}</h3></div>
            <div className='user'>
                <div className='notif'><img src={Lonceng} alt="" /></div>
                <div><p className='user-name'>YOHANES AFFANDI</p></div>
            </div>
        </div>
    </>
  )
}

export default NavbarComponent