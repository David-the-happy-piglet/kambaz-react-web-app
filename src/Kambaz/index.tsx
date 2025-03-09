import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Mail from "./Mail";

import KambazNavigation from "./KambazNavigation";
import Calendar from "./Calendar";
import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute";
import ProtectedCourseRoute from "./Account/ProtectedCourseRoute";

export default function Kambaz() {

    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number", startDate: "2023-9-10", endDate: "2023-12-15", image: "/images/reactjs.jpg", description: "New Description"
    });
    const addNewCourse = () => {
        const newCourse = { ...course, _id: uuidv4() }; setCourses([...courses, newCourse]);
    };

    const deleteCourse = (courseId: string) => { setCourses(courses.filter((course: { _id: string; }) => course._id !== courseId)); };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };


    return (
        <div id="wd-kambaz">

            <KambazNavigation />
            <div className="wd-main-content-offset p-3">

                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="Account/*" element={<Account />} />
                    <Route path="Dashboard/*" element={
                        <ProtectedRoute>
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                            />
                        </ProtectedRoute>
                    } />
                    <Route path="Courses/:cid/*" element={
                        <ProtectedCourseRoute>
                            <Courses courses={courses} />
                        </ProtectedCourseRoute>
                    } />
                    <Route path="Calendar/*" element={<Calendar />} />
                    <Route path="Mail/*" element={<Mail />} />
                </Routes>


            </div>


        </div>

    );

}