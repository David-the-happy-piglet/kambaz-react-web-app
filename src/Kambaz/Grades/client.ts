import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";
const GRADES_API = `${API_BASE}/api`;

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

export const findAllGrades = async () => {
    try {
        const response = await axiosWithCredentials.get(`${GRADES_API}/grades`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const findGradeById = async (gradeId: string) => {
    try {
        const response = await axiosWithCredentials.get(`${GRADES_API}/grades/${gradeId}`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const findGradesByStudent = async (studentId: string) => {
    try {
        const response = await axiosWithCredentials.get(`${GRADES_API}/students/${studentId}/grades`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const findGradesByAssignment = async (assignmentId: string) => {
    try {
        const response = await axiosWithCredentials.get(`${GRADES_API}/assignments/${assignmentId}/grades`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const createGrade = async (assignmentId: string, studentId: string, grade: any) => {
    try {
        const response = await axiosWithCredentials.post(
            `${GRADES_API}/assignments/${assignmentId}/students/${studentId}/grades`,
            grade
        );
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const updateGrade = async (gradeId: string, grade: any) => {
    try {
        const response = await axiosWithCredentials.put(`${GRADES_API}/grades/${gradeId}`, grade);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
};

export const deleteGrade = async (gradeId: string) => {
    try {
        const response = await axiosWithCredentials.delete(`${GRADES_API}/grades/${gradeId}`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error;
    }
}; 