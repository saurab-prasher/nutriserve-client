"use client";
import { useState, useContext, useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { MyContext } from "../context/Context";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {
    loggedInUser,
    handleLogout,
    selectedRecipes,
    likedRecipes,
    serverUrl,
    isLoading,
  } = useContext(MyContext);
  const [recipeCount, setRecipeCount] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  console.log(loggedInUser);

  const avatarUrl = `${serverUrl}/${loggedInUser?.avatarImg}`;
  console.log(avatarUrl);

  useEffect(() => {
    setRecipeCount(selectedRecipes?.length);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRecipes]);

  return (
    <header>
      <div className='mx-auto flex items-center justify-between px-20'>
        {isLoading ? (
          <>
            <div className='skeleton w-36 h-10 rounded-md py-16 my-4'></div>
            <div className='hidden md:flex space-x-6'>
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className='skeleton w-20 h-8 rounded-md py-5'
                ></div>
              ))}
            </div>
            <div className='flex items-center'>
              <div className='skeleton w-24 h-8 rounded-md py-6'></div>
            </div>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                src='/images/logo/logo-nutriserve.png'
                alt='NutriServe logo'
                width={150}
                height={150}
              />
            </Link>
            <nav className={`${isNavOpen ? "block" : "hidden"} md:block`}>
              <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 items-center'>
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
                <div className='cart relative'>
                  <Link href='/checkout'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-8 h-8'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                      />
                    </svg>

                    <span className=' text-white text-center py-[4px] px-2 rounded-full bg-custom-green absolute w-8 h-8 top-[-14px] left-4'>
                      {recipeCount}
                    </span>
                  </Link>
                </div>
                {/* <li>
              <Link
                className='text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out'
                href='/search'
              >
                Search
              </Link>
            </li> */}
                <li className='relative'>
                  {!loggedInUser ? (
                    <Link
                      className='mx-auto cursor-pointer text-center font-bold border m-auto py-2 px-4 text-md text-custom-green border-custom-green rounded-sm mb-4 hover:bg-custom-green hover:text-white'
                      href='/login'
                    >
                      Sign In
                    </Link>
                  ) : (
                    <div
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className='flex gap-2 cursor-pointer items-center'
                    >
                      <img
                        className='w-10  rounded-full'
                        src={avatarUrl}
                        alt='avatar img'
                      />
                      {/* <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                        />
                      </svg> */}

                      <div className=' z-100 '>
                        <div className='flex items-end gap-2  '>
                          <span className='capitalize'>
                            {loggedInUser?.firstname}
                          </span>
                          {isHovered ? (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-6 h-6'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m19.5 8.25-7.5 7.5-7.5-7.5'
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-6 h-6'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m4.5 15.75 7.5-7.5 7.5 7.5'
                              />
                            </svg>
                          )}
                        </div>
                        {isHovered && (
                          <div className='absolute top-4 -left-16 w-60 h-fit mt-2 p-5 shadow-xl rounded-md bg-white z-50  flex flex-col gap-5'>
                            <div className='flex gap-4 mt-6 hover:text-custom-green'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z'
                                />
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                                />
                              </svg>
                              <p>Account Settings</p>
                            </div>

                            <div className='flex gap-4 hover:text-custom-green'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                                />
                              </svg>

                              <Link href={"/wishlist"}>Favorite Recipes</Link>
                            </div>

                            <div className='flex gap-4 hover:text-custom-green'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                                />
                              </svg>

                              <p>Help</p>
                            </div>

                            <div className='flex gap-4 border-t-[1px] pt-6'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
                                />
                              </svg>
                              <button
                                onClick={handleLogout}
                                className='cursor-pointer'
                              >
                                Log Out
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
