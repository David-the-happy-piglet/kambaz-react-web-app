import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";
const USERS_API = `${API_BASE}/api/users`;

// Configure axios defaults
const axiosWithCredentials = axios.create({
    baseURL: API_BASE,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add response interceptor for error handling
axiosWithCredentials.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            console.log("Unauthorized access, redirecting to login...");
        }
        return Promise.reject(error);
    }
);

export const signin = async (credentials: any) => {
    try {
        const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const signup = async (user: any) => {
    try {
        const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};


export const updateUser = async (user: any) => {
    try {
        const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const profile = async () => {
    try {
        const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};

export const signout = async () => {
    try {
        const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const findMyCourses = async () => {
    try {
        const response = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const createCourse = async (course: any) => {
    try {
        const response = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};





