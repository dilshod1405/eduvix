import axios from 'axios';
const Auth_URL = process.env.NEXT_PUBLIC_API_URL_AUTH; // Replace with your backend URL

const register = async (username, email, password, first_name, last_name, photo) => {
  try {
    const response = await axios.post(`${Auth_URL}/register/`, {
        username,
        email,
        password,
        first_name,
        last_name,
        photo
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async (username, password) => {
  try {
    const response = await axios.post(`${Auth_URL}/token/`, {
      username,
      password,
    });

    if (response.data.access) {
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      localStorage.setItem('role', response.data.role);
      return response.data;
    }
  } catch (error) {
    throw error.response.data;
  }
};


const logout = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
};

const getCurrentUser = () => {
    const token = localStorage.getItem('access');
    if (token) {
        try {
            const decoded = jwt_decode(token);
            return decoded; // Returns the decoded payload (e.g., user info)
        } catch (error) {
            console.error("Invalid token:", error);
            logout(); // Clear invalid token
            return null;
        }
    
    }
    return null;
};


const refreshToken = async () => {
    const refresh = localStorage.getItem('refresh');
    if (refresh) {
      try {
        const response = await axios.post(`${Auth_URL}/token/refresh/`, { refresh });
        localStorage.setItem('access', response.data.access);
        return response.data.access; // Return the new access token
      } catch (error) {
        console.error("Failed to refresh token:", error);
        logout();
        return null;
      }
    }
    return null;
  };

export default { register, login, logout, getCurrentUser, refreshToken };