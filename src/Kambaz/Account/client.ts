import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";
const API_PATH = `${API_BASE}/api`;
const USERS_API = `${API_PATH}/users`;

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

export interface User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: "FACULTY" | "STUDENT";
    courses?: string[];
}

// Account related functions
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

export const profile = async () => {
    try {
        const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
        if (!response.data) {
            throw new Error("User not found");
        }
        return response.data;
    } catch (error: any) {
        if (error.response?.status === 401) {
            throw new Error("Not authenticated");
        }
        throw error.response?.data || error;
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

// User management functions
export const findAllUsers = async () => {
    const response = await axiosWithCredentials.get(`${USERS_API}`);
    return response.data;
};

export const findUsersByRole = async (role: string) => {
    const response = await axiosWithCredentials.get(`${USERS_API}?role=${role}`);
    return response.data;
};

export const findUsersByPartialName = async (name: string) => {
    const response = await axiosWithCredentials.get(`${USERS_API}?name=${name}`);
    return response.data;
};

export const findUsersByCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${API_PATH}/courses/${courseId}/users`);
    return response.data;
};

export const findUserById = async (userId: string) => {
    const response = await axiosWithCredentials.get(`${USERS_API}/${userId}`);
    return response.data;
};

export const createUser = async (user: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}`, user);
    return response.data;
};

export const updateUser = async (user: any, editingUser: User) => {
    try {
        const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const deleteUser = async (userId: string) => {
    const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}`);
    return response.data;
};

// Course related functions
export const findCoursesForUser = async (userId: string) => {
    const response = await axiosWithCredentials.get(`${USERS_API}/${userId}/courses`);
    return response.data;
};

export const enrollIntoCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
    return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
    return response.data;
};

export const findMyCourses = async () => {
    try {
        const response = await axiosWithCredentials.get(`${USERS_API}/courses`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const createCourse = async (course: any) => {
    try {
        const response = await axiosWithCredentials.post(`${API_PATH}/courses`, course);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};





