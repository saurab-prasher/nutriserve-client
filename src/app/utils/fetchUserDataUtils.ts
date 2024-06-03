// utils/userUtils.js

import axios from "axios";

export const fetchUserData = async (serverUrl: any, setLoggedInUser: any) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${serverUrl}/users/auth/user`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);

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
