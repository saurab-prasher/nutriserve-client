"use client";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "../context/Context";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { loggedInUser, handleLogout, selectedRecipes, likedRecipes } =
    useContext(MyContext);
  const [recipeCount, setRecipeCount] = useState(0);

  useEffect(() => {
    setRecipeCount(selectedRecipes?.length);

    console.log(recipeCount);
  }, [selectedRecipes]);

  return (
    <header>
      <div className="mx-auto flex items-center justify-between px-12">
        <Link href="/">
          <Image
            src="/images/logo/logo-nutriserve.png"
            alt="NutriServe logo"
            width={150}
            height={150}
          />
        </Link>
        <nav className={`${isNavOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/howitworks"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/meals"
              >
                Meal Plans
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
            <div className="cart relative">
              <Link href="/checkout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>

                <span className=" text-white text-center py-[4px] px-2 rounded-full bg-custom-green absolute w-8 h-8 top-[-14px] left-4">
                  {recipeCount}
                </span>
              </Link>
            </div>
            <li>
              <Link
                className="text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                href="/wishlist"
              >
                <div className="flex items-center justify-between ">
                  Wishlist
                  <button className="text-red-500 focus:outline-none pl-2">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </Link>
            </li>
            <li>
              {!loggedInUser ? (
                <Link
                  className="mx-auto cursor-pointer text-center font-bold border m-auto py-2 px-4 text-md text-custom-green border-custom-green rounded-sm mb-4 hover:bg-custom-green hover:text-white"
                  href="/login"
                >
                  Sign In
                </Link>
              ) : (
                <div className="flex items-center space-x-3">
                  <Image
                    src={loggedInUser?.avatar || "/images/avatar-img.webp"} // Replace "/
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full object-cover" // Adjust the size as needed
                    width={60}
                    height={60}
                  />
                  <span className="font-bold">{loggedInUser?.firstname}</span>
                  <button
                    onClick={handleLogout}
                    className="cursor-pointer text-center font-bold py-2 px-4 text-md text-custom-green border border-custom-green rounded-sm
                    hover:bg-custom-green hover:text-white
                    "
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
