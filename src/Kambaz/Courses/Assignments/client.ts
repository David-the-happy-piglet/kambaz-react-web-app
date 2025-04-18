import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export interface Assignment {
    _id: string;
    title: string;
    description: string;
    course: string;
    dueDate: string;
    points: number;
    availableFromDate: string;
    availableUntilDate: string;
    type: "QUIZ" | "ASSIGNMENT" | "EXAM";
}

export const findAllAssignments = async () => {
    const { data } = await axiosWithCredentials.get(ASSIGNMENTS_API);
    return data;
};

export const findAssignmentById = async (assignmentId: string) => {
    const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${assignmentId}`);
    return data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/${courseId}/assignments`);
    return data;
};

export const createAssignment = async (assignment: Assignment) => {
    const { data } = await axiosWithCredentials.post(ASSIGNMENTS_API, assignment);
    return data;
};

export const updateAssignment = async (assignment: Assignment) => {
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const { data } = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return data;
}; 