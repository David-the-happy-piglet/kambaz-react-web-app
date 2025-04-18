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

    const [enrolling, setEnrolling] = useState<boolean>(false);

    const findCoursesForUser = async () => {
        try {
            if (!currentUser) {
                setCourses([]);
                return;
            }
            const courses = await userClient.findCoursesForUser(currentUser._id);
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            await userClient.enrollIntoCourse(currentUser._id, courseId);
        } else {
            await userClient.unenrollFromCourse(currentUser._id, courseId);
        }
        setCourses(
            courses.map((course) => {
                if (course._id === courseId) {
                    return { ...course, enrolled: enrolled };
                } else {
                    return course;
                }
            })
        );
    };


    const fetchCourses = async () => {
        try {
            if (!currentUser) {
                setCourses([]);
                return;
            }
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
            const courses = allCourses.map((course: any) => {
                if (enrolledCourses.find((c: any) => c._id === course._id)) {
                    return { ...course, enrolled: true };
                } else {
                    return course;
                }
            });
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };


    /*     const fetchCourses = async () => {
            try {
                const courses = await courseClient.fetchAllCourses();
                setCourses(courses);
            } catch (error) {
                console.error(error);
            }
        }; */


    const addNewCourse = async () => {
        const newCourse = await courseClient.createCourse(course);
        setCourses([...courses, newCourse]);

    };

    const deleteCourse = async (courseId: string) => {
        try {
            const status = await courseClient.deleteCourse(courseId);
            if (status) {
                setCourses(courses.filter((course) => course._id !== courseId));
            } else {
                console.error("Failed to delete course");
            }
        } catch (error) {
            console.error("Error deleting course:", error);
        }
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
        if (currentUser) {
            if (enrolling) {
                fetchCourses();
            } else {
                findCoursesForUser();
            }
        } else {
            setCourses([]);
        }
    }, [currentUser, enrolling]);

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
                                    enrolling={enrolling}
                                    setEnrolling={setEnrolling}
                                    updateEnrollment={updateEnrollment}
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