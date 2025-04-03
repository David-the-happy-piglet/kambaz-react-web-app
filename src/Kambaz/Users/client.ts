import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

// Configure axios defaults
axios.defaults.withCredentials = true;

export interface User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: "FACULTY" | "STUDENT";
    courses?: string[];
}

export const findAllUsers = async () => {
    const response = await axios.get(`${API_BASE}/users`);
    return response.data;
};

export const findUsersByRole = async (role: string) => {
    const response = await axios.get(`${API_BASE}/users/role/${role}`);
    return response.data;
};

export const findUsersByCourse = async (courseId: string) => {
    const response = await axios.get(`${API_BASE}/courses/${courseId}/users`);
    return response.data;
};

export const findUserById = async (userId: string) => {
    const response = await axios.get(`${API_BASE}/users/${userId}`);
    return response.data;
};

export const createUser = async (user: Partial<User>) => {
    const response = await axios.post(`${API_BASE}/users`, user);
    return response.data;
};

export const updateUser = async (userId: string, user: Partial<User>) => {
    const response = await axios.put(`${API_BASE}/users/${userId}`, user);
    return response.data;
};

export const deleteUser = async (userId: string) => {
    const response = await axios.delete(`${API_BASE}/users/${userId}`);
    return response.data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const response = await axios.post(`${API_BASE}/users/${userId}/courses/${courseId}/enroll`);
    return response.data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
    const response = await axios.post(`${API_BASE}/users/${userId}/courses/${courseId}/unenroll`);
    return response.data;
}; 