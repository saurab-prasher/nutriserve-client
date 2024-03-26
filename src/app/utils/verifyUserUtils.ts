// utils/authUtils.js

import axios from "axios";

export const verifyUser = async (serverUrl: any, setLoggedInUser: any) => {
  try {
    const response = await axios.get(`${serverUrl}/users/auth/verify`, {
      withCredentials: true,
    });
    if (response.status === 200) {
      setLoggedInUser(response.data.user);
    } else {
      setLoggedInUser(null);
    }
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      setLoggedInUser(null); // Handle unauthorized user
    } else {
      console.error("Error verifying user:", error); // Log other errors
      setLoggedInUser(null);
    }
  }
};
