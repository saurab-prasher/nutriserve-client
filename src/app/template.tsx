"use client";
import { useContext, useEffect } from "react";
import { MyContext } from "./context/Context";
import { fetchUserData } from "./utils/fetchUserDataUtils";
import { verifyUser } from "./utils/verifyUserUtils";

export default function Template({ children }: { children: React.ReactNode }) {
  //   const {
  //     serverUrl,
  //     setLoggedInUser,
  //     loggedInUser,
  //     isLoading,
  //     setIsLoading,
  //     pathname,
  //   } = useContext(MyContext);

  //   console.log(pathname);

  //   const fetchData = () => {
  //     if (serverUrl) {
  //       setIsLoading(true); // Set loading state before starting fetch
  //       // Fetch user data first
  //       fetchUserData(serverUrl, setLoggedInUser)
  //         .then(() => {
  //           // Once user data is fetched, verify user
  //           // Only if the user is present (i.e., not null)
  //           if (loggedInUser) {
  //             verifyUser(serverUrl, setLoggedInUser).finally(() => {
  //               setIsLoading(false); // After all async operations are complete
  //             });
  //           } else {
  //             setIsLoading(false); // No user data fetched, stop loading
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching user data:", error);
  //           setIsLoading(false); // Error occurred, stop loading
  //         });
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData(); // Initial data fetch
  //   }, [pathname, serverUrl]); // Empty dependency array ensures this effect runs only once
  return <>{children}</>;
}
