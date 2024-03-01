import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CustomButton, Logo } from '.';

const NavBar = () => {
  return (
    <header className=' w-full absolute z-10'>
      <nav className=' max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link
          href={'/'}
          className='flex justify-center items-center'>
          <Logo />
        </Link>

        <CustomButton
          title='Sign In'
          containerStyles='text-primary-blue bg-white rounded-full min-w-[130px]'
          btnType='button'
        />
      </nav>
    </header>
  );
};

export default NavBar;
