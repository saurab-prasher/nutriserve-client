import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-gray-700 pt-10'>
      <div className='max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-5 gap-10'>
        <div className='space-y-4'>
          <Image
            src='/images/logo/logo-nutriserve.png'
            alt='NutriServe logo'
            width={100}
            height={100}
          />

          <div className='flex space-x-3'>
            <Link href='#'>Instagram</Link>
            <Link href='#'>Facebook</Link>
            <Link href='#'>Twitter</Link>
          </div>

          <p className='text-sm'>
            Copyright &copy; <span className='year'>2023</span> by Omnifood Inc.
            All rights reserved.
          </p>
        </div>
        <div className='space-y-2'>
          <h3 className='font-semibold'>Contact us</h3>
          <address>
            <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
          </address>
        </div>

        <div className='space-y-2'>
          <h3 className='font-semibold'>Account</h3>
          <ul className='space-y-1'>
            <li>
              <Link href='#'>Create account</Link>
            </li>
            <li>
              <Link href='#'>Sign in</Link>
            </li>
            <li>
              <Link href='#'>IOS app</Link>
            </li>
            <li>
              <Link href='#'>Android App</Link>
            </li>
          </ul>
        </div>

        <div className='space-y-2'>
          <h3 className='font-semibold'>Company</h3>
          <ul className='space-y-1'>
            <li>
              <Link href='#'>About Omnifood</Link>
            </li>
            <li>
              <Link href='#'>For Business</Link>
            </li>
            <li>
              <Link href='#'>Cooking partners</Link>
            </li>
            <li>
              <Link href='#'>Careers</Link>
            </li>
          </ul>
        </div>

        <div className='space-y-2'>
          <h3 className='font-semibold'>Resources</h3>
          <ul className='space-y-1'>
            <li>
              <Link href='#'>Recipe directory</Link>
            </li>
            <li>
              <Link href='#'>Help center</Link>
            </li>
            <li>
              <Link href='#'>Privacy & terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
