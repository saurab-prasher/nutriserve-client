/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useCallback } from "react";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { fetchUserData } from "../utils/fetchUserDataUtils";
import { verifyUser } from "../utils/verifyUserUtils";

import axios from "axios";

axios.defaults.withCredentials = true;

export const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

// export const MyContext = createContext<MyContextType>(defaultContextValue);
export const MyContext = createContext<any>("");
export const MyContextProvider = ({ children }: any) => {
  const [selectedRecipes, setSelectedRecipes] = useState<any>([]);
  const [likedRecipes, setlikedRecipes] = useState<any>([]);
  const [loggedInUser, setLoggedInUser] = useState<any>();
  const [avatarImg, setAvatarImg] = useState<any>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    visible: false,
    content: "",
  });

  const [loginError, setLoginError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [likedMealIds, setLikedMealIds] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [recipeUpdateMsg, setRecipeUpdateMsg] = useState("");
  const [likedRecipeMsg, setLikedRecipeMsg] = useState("");
  const [pathname, setPathname] = useState<string>(usePathname());

  const router = useRouter();

  const fetchData = useCallback(async () => {
    // Use pathname here
    if (serverUrl) {
      setIsLoading(true);
      verifyUser(serverUrl, setLoggedInUser)
        .then(() => {
          if (loggedInUser) {
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setIsLoading(false);
        });
      // fetchUserData(serverUrl, setLoggedInUser)
      //   .then(() => {
      //     console.log(loggedInUser);
      //     if (loggedInUser) {
      //       verifyUser(serverUrl, setLoggedInUser).finally(() => {
      //         setIsLoading(false);
      //       });
      //     } else {
      //       setIsLoading(false);
      //     }
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching user data:", error);
      //     setIsLoading(false);
      //   });
    }
  }, [pathname, serverUrl]);

  useEffect(() => {
    fetchData(); // Initial data fetch
  }, [fetchData]); // Empty dependency array ensures this effect runs only once

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: any) => {
    setLastName(e.target.value);
  };

  async function handleRegisterSubmit(e: any) {
    e.preventDefault();

    if (!avatarImg) {
      alert("Please select an image first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("firstname", firstName);
      formData.append("lastname", lastName);
      formData.append("avatarImg", avatarImg);
      const { data } = await axios.post(
        `${serverUrl}/users/register`,
        formData
      );

      if (data?.msg === "Success") {
        setLoggedInUser(data.user); // Update UI based on logged-in user
        const { token } = data;
        localStorage.setItem("token", token); // Store the token in local storage

        router.push("/");
        setEmail("");
        setPassword("");
        setError({ visible: false, content: "" });
        router.push("/plans");
      } else {
        setError({
          visible: true,
          content: "Registration failed. Please try again.",
        });

        setEmail("");
        setPassword("");

        router.push("/register");
        setError({ visible: false, content: "" });
      }
    } catch (error: any) {
      setError({
        visible: true,
        content: "Registration failed. Please try again.",
      });
    }
  }

  async function fetchLikedmeals() {
    const res = await fetch(
      `${serverUrl}/api/wishlist/${loggedInUser?.userId}`
    );
    const data = await res.json();

    setLikedMealIds(data.likedMeals);
  }

  // Login submission
  async function handleLoginSubmit(e: any) {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${serverUrl}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);

      if (data.msg === "Invalid credentials") {
        handleLoginMsg(
          "Email address or password incorrect, please try again!"
        );
        return;
      }
      if (data?.msg === "Successfully signed") {
        setLoginError("");
        setLoggedInUser(data.user);
        const { token } = data;

        localStorage.setItem("token", token); // Store the token in local storage
        router.push("/");
      }

      router.push("/"); // Redirect to homepage or dashboard after successful login
    } catch (error) {
      setError({
        visible: true,
        content: "Email address or password incorrect, please try again!",
      });

      // setError("Failed to login"); // Update error message based on the actual error from the API
    }
  }

  // Logout
  async function handleLogout() {
    try {
      await axios.get(`${serverUrl}/users/logout`).then((response) => {
        localStorage.removeItem("token"); // Remove the token from local storage
        setLoggedInUser(null); // Update local state
        setEmail("");
        setPassword("");
      });
    } catch (error) {
      console.error("Logout failed", error);
    }
    router.push("/login"); // Redirect to login page after logout
  }

  // Function to add a meal to the selected recipes
  const handleSelectMeal = (selectedMeal: any) => {
    // Check if the meal is already in the selected recipes

    const isAlreadySelected = selectedRecipes.some(
      (meal: any) => meal._id === selectedMeal._id
    );

    if (!isAlreadySelected) {
      setSelectedRecipes([...selectedRecipes, selectedMeal]);
      handleRecipeUpdateMessage("Recipe added to cart");
    }
  };

  const removeSelectedMeal = (mealId: any) => {
    setSelectedRecipes(
      selectedRecipes.filter((meal: any) => meal._id !== mealId)
    );
    handleRecipeUpdateMessage("Recipe removed from cart");
  };
  const handleRecipeUpdateMessage = (message: any) => {
    setRecipeUpdateMsg(message);
  };

  const handleLikedRecipeMsg = (message: any) => {
    setLikedRecipeMsg(message);
  };

  // Function to add a meal to the liked list
  const handlelikedMeal = async (likedMeal: any) => {
    // Check if the meal is already in the selected recipes

    const isAlreadySelected = likedRecipes.some(
      (meal: any) => meal === likedMeal._id
    );

    if (!isAlreadySelected) {
      setlikedRecipes([...likedRecipes, likedMeal._id]);
      handleLikedRecipeMsg("Recipe added to favorites!");
    }

    if (loggedInUser) {
      const userId = loggedInUser.userId;
      const mealId = likedMeal._id;

      const { data } = await axios.post(
        `${serverUrl}/api/wishlist`,
        {
          userId,
          mealId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function handleConfirmPassword(event: React.ChangeEvent<HTMLInputElement>) {
    const confirmPasswordValue = event.target.value;

    if (password === confirmPasswordValue) {
      setConfirmPassword(confirmPasswordValue);
      setError({ visible: false, content: "" }); // Reset error if passwords match
    } else {
      setError({
        visible: true,
        content: "Passwords do not match",
      });
    }
  }

  const handleAvatarImageChange = (e: any) => {
    // Get the files from the event object
    const files = e.target.files;
    if (files && files[0]) {
      setAvatarImg(files[0]);
    }
  };

  const handleLoginMsg = (msg: string) => {
    setLoginError(msg);
  };
  return (
    <MyContext.Provider
      value={{
        loginError,
        handleLoginMsg,
        error,
        handleRegisterSubmit,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPassword,
        handleAvatarImageChange,
        email,
        handleSelectMeal,
        handlelikedMeal,
        handleLoginSubmit,
        password,
        handleLogout,
        firstName,
        handleRecipeUpdateMessage,
        lastName,
        likedMealIds,
        recipeUpdateMsg,
        loggedInUser,
        likedRecipes,
        selectedRecipes,
        handleFirstNameChange,
        handleLastNameChange,
        removeSelectedMeal,
        serverUrl,
        likedRecipeMsg,
        handleLikedRecipeMsg,
        setLoggedInUser,
        setError,
        isLoading,
        pathname,
        setIsLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
