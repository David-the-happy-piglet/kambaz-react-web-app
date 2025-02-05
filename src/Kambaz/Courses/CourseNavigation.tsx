import { Link } from "react-router-dom";
export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <Link to="/Kambaz/Courses/5610/Home" id="wd-course-home-link"
                className="list-group-item active border border-0">Home</Link>
            <Link to="/Kambaz/Courses/5610/Modules" id="wd-course-modules-link"
                className="list-group-item active border border-0">Modules</Link>
            <a href="https://piazza.com/northeastern"
                id="wd-piazza-link" target="_blank"
                className="list-group-item active border border-0" >Piazza</a>
            <Link to="/Kambaz/Courses/5610/Zoom" id="wd-course-zoom-link"
                className="list-group-item active border border-0">Zoom</Link>
            <Link to="/Kambaz/Courses/5610/Assignments" id="wd-course-assignments-link"
                className="list-group-item active border border-0">Assignments</Link>
            <Link to="/Kambaz/Courses/5610/Quizzes" id="wd-course-quizzes-link"
                className="list-group-item active border border-0">Quizzes</Link>
            <Link to="/Kambaz/Courses/5610/Grades" id="wd-course-grades-link"
                className="list-group-item active border border-0">Grades</Link>
            <Link to="/Kambaz/Courses/5610/People" id="wd-course-people-link"
                className="list-group-item active border border-0">People</Link>
        </div>

    );
}
