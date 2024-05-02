// utils/userUtils.js

import axios from "axios";

export const fetchUserData = async (serverUrl: any, setLoggedInUser: any) => {
  try {
    const response = await axios.get(`${serverUrl}/users/auth/user`, {
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
      setLoggedInUser(null);
    }
  }
};
