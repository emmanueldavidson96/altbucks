'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../asset/logo.svg';
import {
  CAlert,
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from '@coreui/react';
import { useState } from 'react';
import menu from '../asset/ci_hamburger-lg.svg';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <nav className='flex justify-between py-4 items-center nav-bar'>
        <div>
          <Image src={logo} alt='logo' />
        </div>
        <div className='gap-4 text-black nav-link'>
          <Link href='/about-us'>About Us</Link>
          <Link href='/reviews'>Reviews</Link>
          <Link href='/term-of-service'>Term Of Service</Link>
          <Link href='/contact-us'>Contact Us</Link>
        </div>
        <div className='gap-3 nav-button'>
          <button className='btn-1'>Log In</button>
          <button className='btn-2'>Sign Up</button>
        </div>
        <CButton className='lg:hidden menu-button' onClick={() => setVisible(true)}>
          <Image src={logo} alt='logo' />
        </CButton>

        <COffcanvas
          backdrop='static'
          placement='end'
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <CCloseButton
              className='text-reset'
              onClick={() => setVisible(false)}
            />
          </COffcanvasHeader>
          <COffcanvasBody>
            <div className='flex flex-col gap-4'>
              <Link href='/about-us'>About Us</Link>
              <Link href='/reviews'>Reviews</Link>
              <Link href='/term-of-service'>Term Of Service</Link>
              <Link href='/contact-us'>Contact Us</Link>
              <button className='btn-1'>Log In</button>
              <button className='btn-2'>Sign Up</button>
            </div>
          </COffcanvasBody>
        </COffcanvas>
      </nav>
    </>
  );
};

export default NavBar;
