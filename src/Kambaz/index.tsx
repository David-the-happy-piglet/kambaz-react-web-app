import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Mail from "./Mail";
import Grades from "./Grades";

import KambazNavigation from "./KambazNavigation";
import Calendar from "./Calendar";
import "./styles.css";
import { useEffect, useState } from "react";
/* import { v4 as uuidv4 } from "uuid"; */
/* import * as db from "./Database"; */
import ProtectedRoute from "./Account/ProtectedRoute";
import ProtectedCourseRoute from "./Account/ProtectedCourseRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kambaz() {

    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number", startDate: "2023-9-10", endDate: "2023-12-15", image: "/images/reactjs.jpg", description: "New Description"
    });

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
        try {
            const courses = await userClient.findMyCourses();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };


    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);

    };

    const deleteCourse = async (courseId: string) => {
        // const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = async () => {
        await courseClient.updateCourse(course);

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

    useEffect(() => {
        fetchCourses();
    }, [currentUser]);

    return (
        <Session>
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
                        <Route path="Grades/*" element={
                            <ProtectedRoute>
                                <Grades />
                            </ProtectedRoute>
                        } />
                    </Routes>


                </div>


            </div>
        </Session>
    );

}