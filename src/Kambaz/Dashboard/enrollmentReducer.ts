import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [] as string[], // Array of course IDs that the student is enrolled in
    showAllCourses: false
};

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        toggleEnrollment: (state, { payload: courseId }) => {
            const index = state.enrollments.indexOf(courseId);
            if (index === -1) {
                state.enrollments.push(courseId);// Add the course to the list
            } else {
                state.enrollments.splice(index, 1);// Remove the course from the list
            }
        },
        toggleShowAllCourses: (state) => {
            state.showAllCourses = !state.showAllCourses;
        }
    },
});
export const { toggleEnrollment, toggleShowAllCourses } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;