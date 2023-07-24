"use client"

import Image from 'next/image'
import LogoImage from '@/assets/images/logo.png';
import './styles.scss';
import MenuMobile from '../MenuMobile/MenuMobile';
import { useState } from 'react';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
        <div className="navbar-left">
            <Image src={LogoImage} alt='logo' width={60} height={60} />
        </div>

        <div className='navbar-right'>
            <button type="button" className="menu-btn" onClick={() => setOpen(true)}>
                <i className="fa-regular fa-bars"></i>
            </button>

            {open && <MenuMobile setOpen={setOpen} />}
        </div>
    </div>
  )
}

export default Navbar