import axios from "axios";

export const login = async (username, password) => {
  try {
    // 1️⃣ Login request (does NOT return token, only user info)
    const loginResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_AUTH}/profile/login/`, { username, password });

    const { role } = loginResponse.data; // Extract user role

    // 2️⃣ Fetch token from `/token/` endpoint
    const tokenResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL_AUTH}/token/`, { username, password });
    

    return { access: tokenResponse.data.access, role, refresh: tokenResponse.data.refresh };
  } catch (error) {
    throw error.response?.data?.message || "Login yoki parol xato !";
  }
};