import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";
const API_PREFIX = "/api";

export interface Assignment {
    _id: string;
    title: string;
    course: string;
    description?: string;
    points?: number;
    dueDate?: string;
    availableFrom?: string;
    availableUntil?: string;
}

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${API_BASE}${API_PREFIX}/courses/${courseId}/assignments`);
    return response.data;
};

export const findAssignmentById = async (assignmentId: string) => {
    const response = await axios.get(`${API_BASE}${API_PREFIX}/assignments/${assignmentId}`);
    return response.data;
};

export const createAssignment = async (courseId: string, assignment: Partial<Assignment>) => {
    const response = await axios.post(`${API_BASE}${API_PREFIX}/courses/${courseId}/assignments`, assignment);
    return response.data;
};

export const updateAssignment = async (assignmentId: string, assignment: Partial<Assignment>) => {
    const response = await axios.put(`${API_BASE}${API_PREFIX}/assignments/${assignmentId}`, assignment);
    return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${API_BASE}${API_PREFIX}/assignments/${assignmentId}`);
    return response.data;
}; 