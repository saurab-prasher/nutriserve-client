"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className='bg-gray-100'>
      <div className='container mx-auto flex items-center justify-between p-6'>
        <Link href='/'>Omnifood</Link>
        <nav className={`${isNavOpen ? "block" : "hidden"} md:block`}>
          <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10'>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='how'
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='/meals'
              >
                Meals
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='testimonials'
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='pricing'
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-150 ease-in-out'
                href='register'
              >
                Try for free
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className='md:hidden focus:outline-none'
        >
          {/* {isNavOpen ? (
              <XIcon className='h-6 w-6' />
            ) : (
              <MenuIcon className='h-6 w-6' />
            )} */}
        </button>
      </div>
    </header>
  );
}
