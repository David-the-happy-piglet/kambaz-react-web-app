import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CoursesNavigation from "./CourseNavigation";
import Assignments from "./Assignments";
import Modules from "./Modules";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/table";
import { courses } from "../Database";

export default function Courses() {

    const { cid } = useParams();
    const { pathname } = useLocation();


    const course = courses.find((course) => course._id === cid);


    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}</h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">

                    <CoursesNavigation />
                </div>

                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />

                        <Route path="Assignments" element={<Assignments />} />

                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="Zoom" element={<h2>Zoom</h2>} />
                        <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                        <Route path="Grades" element={<h2>Grades</h2>} />
                        <Route path="People" element={<PeopleTable />} />
                    </Routes>
                </div>
            </div>


        </div>
    );
}