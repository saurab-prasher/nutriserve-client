"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/'>
          <Image
            src='/images/logo/logo-nutriserve.png'
            alt='NutriServe logo'
            width={150}
            height={150}
          />
        </Link>
        <nav className={`${isNavOpen ? "block" : "hidden"} md:block`}>
          <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10'>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='/'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='/about'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='/pricing'
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='/meals'
              >
                Meal Plans
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='/faq'
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='/blog'
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='/contact'
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className='bg-[#4CAF50] text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-150 ease-in-out'
                href='/login'
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className='md:hidden focus:outline-none'
        ></button>
      </div>
    </header>
  );
}
