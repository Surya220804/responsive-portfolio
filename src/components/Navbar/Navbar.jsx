import React, { useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react';
import theme_pattern from '../../assets/theme_pattern.svg'

const Navbar = () => {
  const [menu,setMenu]=useState('home')
  const menuRef=useRef()
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <div className="navbar-title">
          <h1>Surya</h1>
          <img src={theme_pattern} alt="" />    
      </div>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu=='home' ?<img src={underline}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu=='about' ?<img src={underline}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu('projects')}>Projects</p></AnchorLink>{menu=='projects' ?<img src={underline}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#experience'><p onClick={()=>setMenu('expereince')}>Expereince</p></AnchorLink>{menu=='expereince' ?<img src={underline}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu=='contact' ?<img src={underline}/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar