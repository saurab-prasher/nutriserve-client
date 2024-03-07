"use client";
import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { MyContext } from "../context/Context";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { loggedInUser, handleLogout } = useContext(MyContext);

  return (
    <header>
      <div className='mx-auto flex items-center justify-between px-12'>
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
                href='/howitworks'
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
              {!loggedInUser ? (
                <Link
                  className='mx-auto cursor-pointer text-center font-bold border m-auto py-2 px-4 text-md text-custom-green border-custom-green rounded-sm mb-4 hover:bg-custom-green hover:text-white'
                  href='/login'
                >
                  Sign In
                </Link>
              ) : (
                <div className='flex items-center space-x-3'>
                  <Image
                    src={loggedInUser?.avatar || "/images/avatar-img.webp"} // Replace "/
                    alt='User Avatar'
                    className='h-8 w-8 rounded-full object-cover' // Adjust the size as needed
                    width={60}
                    height={60}
                  />
                  <span className='font-bold'>{loggedInUser?.firstname}</span>
                  <button
                    onClick={handleLogout}
                    className='cursor-pointer text-center font-bold py-2 px-4 text-md text-custom-green border border-custom-green rounded-sm
                    hover:bg-custom-green hover:text-white
                    '
                  >
                    Log Out
                  </button>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
