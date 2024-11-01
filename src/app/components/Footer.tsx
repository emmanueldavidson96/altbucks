import React from 'react';
import Image from 'next/image';
import logo from '../asset/footer logo.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <main className='bg-[#2877EA] p-8'>
        <footer className='px-6 py-3 p-4'>
          <section className='footer-container p-5'>
            <div className=''>
              <Image src={logo} alt='logo' />
            </div>
            <div className='footer-1 flex flex-col gap-4'>
              <Link href='/about-us'>About Us</Link>
              <Link href='/contact-us'>Contact Us</Link>
              <Link href='/view-reviews'>View Reviews</Link>
            </div>
            <div className='footer-1 flex flex-col gap-4'>
              <Link href='/term-of-service'>Terms of Service</Link>
              <Link href='/faq'>FAQ</Link>
            </div>
          </section>
          <hr />

          <section className='px-6 copyright'>
            <p className='pt-3'>© 2024 AltBucks. All right reserved</p>
          </section>
        </footer>
      </main>
    </>
  );
};

export default Footer;
