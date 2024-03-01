import Image from 'next/image';
import React from 'react';
import { FooterLinks, Logo } from '.';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Logo />
          <p className=' text-base text-gray-700'>
            CarHub {year}
            <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className='footer__links'>
          <FooterLinks />
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <div className='footer__copyrights-link'>
          <p>@{year} CarHub. All Rights Reserved.</p>
          <Link
            href='/'
            className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link
            href='/'
            className='text-gray-500'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;