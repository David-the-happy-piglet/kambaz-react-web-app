import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";
const API_PATH = `${API_BASE}/api`;
const USERS_API = `${API_BASE}/api/users`;

// Configure axios defaults
const axiosWithCredentials = axios.create({ withCredentials: true });

/* axios.defaults.withCredentials = true; */

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
    const response = await axiosWithCredentials.get(`${API_PATH}/users`);
    return response.data;
};

export const findUsersByRole = async (role: string) => {
    const response = await axiosWithCredentials.get(`$${USERS_API}?role=${role}`);
    return response.data;
};

export const findUsersByPartialName = async (name: string) => {
    const response = await axios.get(`${USERS_API}?name=${name}`);
    return response.data;
};

export const findUsersByCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${API_PATH}/courses/${courseId}/users`);
    return response.data;
};

export const findUserById = async (userId: string) => {
    const response = await axiosWithCredentials.get(`${API_PATH}/users/${userId}`);
    return response.data;
};

export const createUser = async (user: Partial<User>) => {
    const response = await axiosWithCredentials.post(`${API_PATH}/users`, user);
    return response.data;
};

export const updateUser = async (user: any) => {
    const response = await axiosWithCredentials.put(`${API_PATH}/users/${user._id}`, user);
    return response.data;
};

export const deleteUser = async (userId: string) => {
    const response = await axiosWithCredentials.delete(`${API_PATH}/users/${userId}`);
    return response.data;
};


export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(`${API_PATH}/users/${userId}/courses/${courseId}/enroll`);
    return response.data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(`${API_PATH}/users/${userId}/courses/${courseId}/unenroll`);
    return response.data;
}; 