// utils/authUtils.js

import axios from "axios";

export const verifyUser = async (serverUrl: any, setLoggedInUser: any) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${serverUrl}/users/auth/verify`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      // fetch the user after verifying the token is valid
      const response = await axios.get(`${serverUrl}/users/auth/user`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoggedInUser(response.data.user);
    } else {
      setLoggedInUser(null);
    }
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      setLoggedInUser(null); // Handle unauthorized user
    } else {
      setLoggedInUser(null);
    }
  }
};
