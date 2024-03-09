"use client";
import React from "react";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
// export const MyContext = createContext("");
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
  name: string;
  age: number;
  happyBirthday: () => void;
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
}

// This will be used to initialize context
const defaultContextValue: MyContextType = {
  name: "",
  age: 1,
  happyBirthday: () => {},
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
};

interface MyContextProviderProps {
  children: React.ReactNode;
}

export const MyContext = createContext<MyContextType>(defaultContextValue);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(1);
  const happyBirthday = () => setAge(age + 1);

  // State for storing selected recipes
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
        "http://localhost:5000/users/register",
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
        localStorage.setItem("token", data.token); // Consider security implications
        setEmail("");
        setPassword("");
        setError("");
        router.push("/plans");
      } else {
        // Handle cases where the message is not "SUCCESS"
        setError("Registration failed. Please try again.");
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
      `http://localhost:5000/api/wishlist/${loggedInUser?.userId}`
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
        "http://localhost:5000/users/login",
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
      if (data?.msg === "SUCCESS") {
        setLoggedInUser(data.user);
      }

      router.push("/"); // Redirect to homepage or dashboard after successful login
    } catch (error) {
      setError("Failed to login"); // Update error message based on the actual error from the API
    }
  }

  // Logout
  function handleLogout() {
    // Remove token from storage and clear user state
    localStorage.removeItem("token");
    setEmail("");
    setLoggedInUser(undefined);
    setPassword("");
    setError(""); // Clear any errors
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
        "http://localhost:5000/api/wishlist",
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
        name,
        age,
        happyBirthday,
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
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
