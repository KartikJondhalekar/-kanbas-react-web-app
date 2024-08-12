import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: []
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload;
        },
        addCourse: (state, { payload: course }) => {
            state.courses = [...state.courses, course] as any;
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter((c: any) => c._id !== courseId);
        },
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses?.map((c: any) => c._id === course._id ? course : c) as any;
        }
    }
});

export const { addCourse, deleteCourse, updateCourse, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;