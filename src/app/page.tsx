"use client";

import { useEffect, useContext, useState } from "react";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";
import HowItWorks from "./components/HowItWorks";
import GoodForYou from "./components/GoodForYou";
import Menu from "./components/Menu";
import { MyContext } from "./context/Context";
import axios from "axios";

// import { MenuIcon, XIcon } from "heroicons/react/outline";

export default function Home() {
  const { setLoggedInUser, serverUrl, loggedInUser } = useContext(MyContext);

  console.log(loggedInUser);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get(`${serverUrl}/users/auth/verify`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          setLoggedInUser(response.data.user);
        } else {
          setLoggedInUser(null);
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        setLoggedInUser(null);
      }
    };

    if (!loggedInUser) verifyUser();
  }, [loggedInUser, setLoggedInUser, serverUrl]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Define the function inside the effect to avoid issues with missing dependencies
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${serverUrl}/users/auth/user`, {
          withCredentials: true,
        });

        setLoggedInUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serverUrl]); // Empty dependency array means this runs once on component mount

  return (
    <div className='m-auto'>
      <HeroSection />
      <Testimonial />
      <HowItWorks />
      <GoodForYou />
      <Menu />
    </div>
  );
}
