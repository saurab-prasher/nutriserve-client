"use client";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
axios.defaults.withCredentials = true;

const serverUrl = process.env.SERVER_URL;
interface NutritionalValues {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
}

interface Meal {
  _id: string;
  name: string;
  description: string;
  category: string;
  ingredients: string[];
  mealType: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  nutritionalValues: NutritionalValues;
  imageUrl?: string;
}

interface User {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string; // Note: You might not always want to include this in frontend types
  preferences: string[];
  createdAt?: string;
  updatedAt?: string;
}

interface MyContextType {
  handleRegisterSubmit: (e: React.FormEvent) => Promise<void>;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleError: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  handleSelectMeal: (selectedMeal: Meal) => void;
  handlelikedMeal: (likedMeal: Meal) => Promise<void>;
  handleLoginSubmit: (e: React.FormEvent) => Promise<void>;
  password: string;
  handleLogout: () => void;
  firstName: string;
  lastName: string;
  likedMealIds: string[];
  loggedInUser: User | null;
  likedRecipes: string[]; // Assuming just the IDs, adjust if it's full recipes
  selectedRecipes: Meal[];
  handleFirstNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeSelectedMeal: any;
  serverUrl: any;
  setLoggedInUser: any;
  error: string;
  setError: any;
}

// This will be used to initialize context
const defaultContextValue: MyContextType = {
  handleRegisterSubmit: async (e) => {},
  handleEmailChange: (e) => {},
  handlePasswordChange: (e) => {},
  handleError: (e) => {},
  email: "",
  handleSelectMeal: (selectedMeal) => {},
  handlelikedMeal: async (likedMeal) => {},
  handleLoginSubmit: async (e) => {},
  password: "",
  handleLogout: () => {},
  firstName: "",
  lastName: "",
  likedMealIds: [],
  loggedInUser: null,
  likedRecipes: [],
  selectedRecipes: [],
  handleFirstNameChange: (e) => {},
  handleLastNameChange: (e) => {},
  removeSelectedMeal: () => {},
  serverUrl: "",
  setLoggedInUser: null,
  error: "",
  setError: "",
};

interface MyContextProviderProps {
  children: React.ReactNode;
}

export const MyContext = createContext<MyContextType>(defaultContextValue);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [selectedRecipes, setSelectedRecipes] = useState<any>([]);
  const [likedRecipes, setlikedRecipes] = useState<any>([]);
  const [loggedInUser, setLoggedInUser] = useState<any>();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [likedMealIds, setLikedMealIds] = useState([]);

  const [password, setPassword] = useState("");
  const router = useRouter();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  // State for storing selected recipes

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleError = (e: any) => {
    setError(e.target.value);
  };

  const handleFirstNameChange = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: any) => {
    setLastName(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  async function handleRegisterSubmit(e: any) {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${serverUrl}/users/register`,
        {
          email,
          password,
          firstname: firstName,
          lastname: lastName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);
      if (data?.msg === "SUCCESS") {
        setLoggedInUser(data.user); // Update UI based on logged-in user

        router.push("/");
        setEmail("");
        setPassword("");
        setError("");
        router.push("/plans");
      } else {
        setError("Registration failed. Please try again.");
        setEmail("");
        setPassword("");

        router.push("/register");
        setError("");
      }
    } catch (error: any) {
      setError(
        `Failed to register: ${error.response?.data?.error || error.message}`
      );
    }
  }

  async function fetchLikedmeals() {
    console.log(loggedInUser);
    const res = await fetch(
      `${serverUrl}/api/wishlist/${loggedInUser?.userId}`
    );
    const data = await res.json();
    console.log(data.likedMeals);
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

      if (data?.msg === "SUCCESS") {
        setLoggedInUser(data.user);
        router.push("/");
      }

      router.push("/"); // Redirect to homepage or dashboard after successful login
    } catch (error) {
      setError("Email address or password incorrect, please try again!");
      // setError("Failed to login"); // Update error message based on the actual error from the API
    }
  }

  // Logout
  async function handleLogout() {
    try {
      await axios.get(`${serverUrl}/users/logout`).then((response) => {
        setLoggedInUser(null); // Update local state
        setEmail("");
        setPassword("");
        setError("");
      });
    } catch (error) {
      console.error("Logout failed", error);
      setError("Failed to logout"); // Handle logout error
    }
    router.push("/login"); // Redirect to login page after logout
  }

  // Function to add a meal to the selected recipes
  const handleSelectMeal = (selectedMeal: any) => {
    // Check if the meal is already in the selected recipes

    const isAlreadySelected = selectedRecipes.some(
      (meal: any) => meal._id === selectedMeal._id
    );

    console.log(selectedRecipes);
    if (!isAlreadySelected) {
      setSelectedRecipes([...selectedRecipes, selectedMeal]);
    }
  };

  const removeSelectedMeal = (mealId: any) => {
    setSelectedRecipes(
      selectedRecipes.filter((meal: any) => meal._id !== mealId)
    );
  };

  // Function to add a meal to the liked list
  const handlelikedMeal = async (likedMeal: any) => {
    // Check if the meal is already in the selected recipes

    const isAlreadySelected = likedRecipes.some(
      (meal: any) => meal._id === likedMeal._id
    );

    if (!isAlreadySelected) {
      setlikedRecipes([...likedRecipes, likedMeal._id]);
    }
    if (loggedInUser) {
      const userId = loggedInUser.userId;
      const mealId = likedMeal._id;
      console.log(likedMeal._id);
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

  return (
    <MyContext.Provider
      value={{
        error,
        handleRegisterSubmit,
        handleEmailChange,
        handlePasswordChange,
        handleError,
        email,
        handleSelectMeal,
        handlelikedMeal,
        handleLoginSubmit,
        password,
        handleLogout,
        firstName,
        lastName,
        likedMealIds,
        loggedInUser,
        likedRecipes,
        selectedRecipes,
        handleFirstNameChange,
        handleLastNameChange,
        removeSelectedMeal,
        serverUrl,
        setLoggedInUser,
        setError,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
