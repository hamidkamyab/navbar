import React, { useEffect, useRef, useState } from 'react'
import * as IO from 'react-icons/io'
import Logo from './logo.png'
import { menus, socials } from './data'

function Navbar() {
    const [showMenu,setShowMenu] = useState(false);
    const navLinksRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const menuHeight = menuRef.current.clientHeight;
        showMenu?
        navLinksRef.current.style.height = `${menuHeight}px`
        :
        navLinksRef.current.style.height = `0px`
    }, [showMenu]);
    return (
        <nav className='navbar p-0 position-relative'>
            <div className="container d-flex justify-content-between align-items-center gap-2">
                <div className='right d-flex align-items-center gap-5'>
                    <div className='logo-btn d-flex align-items-center'>
                        <button className='border-0'  onClick={()=>setShowMenu(!showMenu)} >
                            <IO.IoIosMenu className='menu-btn' role='button' size={24}/>
                        </button>
                        <img src={Logo} width={32} />
                    </div>
                    <div className='nav-links' ref={navLinksRef}>
                        <ul className='menu m-0 p-0 list-unstyled gap-0 gap-md-2' ref={menuRef}>
                            {
                                menus.map((menu, index) => {
                                    return (
                                        <li className={index == 0 ? 'menu-item active' : 'menu-item'} role='button' key={index}>
                                            <a href={menu.url} className='px-md-2'>
                                                {menu.text}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        
                    </div>
                </div>
                <div className='left'>
                    <ul className='social-icon m-0 p-0 list-unstyled d-flex align-items-center gap-3'>
                        {
                            socials.map((social, index) => {
                                return (
                                    <li key={index}>
                                        <a href={social.url} className='fs-5'>
                                            {social.icon}
                                        </a>
                                    </li>
                                );
                            })
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
