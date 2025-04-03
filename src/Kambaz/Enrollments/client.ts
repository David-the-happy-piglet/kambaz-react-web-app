import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export interface Enrollment {
    _id: string;
    user: string;
    course: string;
    enrolled: boolean;
}

export const findEnrollmentsByUser = async (userId: string) => {
    const response = await axios.get(`${API_BASE}/users/${userId}/enrollments`);
    return response.data;
};

export const findEnrollmentsByCourse = async (courseId: string) => {
    const response = await axios.get(`${API_BASE}/courses/${courseId}/enrollments`);
    return response.data;
};

export const toggleEnrollment = async (userId: string, courseId: string) => {
    const response = await axios.post(`${API_BASE}/users/${userId}/courses/${courseId}/enroll`);
    return response.data;
};

export const updateEnrollment = async (enrollmentId: string, enrollment: Partial<Enrollment>) => {
    const response = await axios.put(`${API_BASE}/enrollments/${enrollmentId}`, enrollment);
    return response.data;
};

export const deleteEnrollment = async (enrollmentId: string) => {
    const response = await axios.delete(`${API_BASE}/enrollments/${enrollmentId}`);
    return response.data;
}; 