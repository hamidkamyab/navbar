import React from 'react'
import * as IO from 'react-icons/io'
import Logo from './logo.png'
import { menus, socials } from './data'

function Navbar() {
    return (
        <nav className='navbar p-0'>
            <div className="container d-flex justify-content-between align-items-center gap-2">
                <div className='right d-flex align-items-center gap-5'>
                    <div className='logo-btn'>
                        <IO.IoIosMenu className='menu-btn' />
                        <img src={Logo} width={32} />
                    </div>
                    <ul className='menu m-0 p-0 list-unstyled d-flex align-items-center gap-2'>
                       
                        {
                            menus.map((menu, index)=>{
                                return (
                                    <li className={index == 0?'menu-item active':'menu-item' } role='button' key={index}>
                                        <a href={menu.url} className='px-2'>
                                           {menu.text}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
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
