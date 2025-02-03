import { Navigate, Route, Routes } from "react-router-dom";
import CoursesNavigation from "./CourseNavigation";
import Assignments from "./Assignments";
import Modules from "./Modules";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";

export default function Courses() {

    return (
        <div id="wd-courses">
            <h2>CS5610</h2>
            <hr />
            <table>
                <tr>
                    <td valign="top"> <CoursesNavigation /> </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />

                            <Route path="Assignments" element={<Assignments />} />

                            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                            <Route path="Zoom" element={<h2>Zoom</h2>} />
                            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                            <Route path="Grades" element={<h2>Grades</h2>} />
                            <Route path="People" element={<h2>People</h2>} />
                        </Routes>
                    </td>

                </tr>
            </table>

        </div>
    );
}